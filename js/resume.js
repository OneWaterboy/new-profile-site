const resumeList = document.getElementById("resumeList");
const filterButtons = document.querySelectorAll(".resume-filter");
const resumeSummary = document.getElementById("resumeSummary");
const resumeData = window.resumeData || [];
const resumeSummaries = window.resumeSummaries || {};

function getURLFilter() {
  const params = new URLSearchParams(window.location.search);
  return params.get("filter") || "broad";
}

function setURLFilter(filter) {
  const params = new URLSearchParams(window.location.search);

  if (filter === "broad") {
    params.delete("filter");
  } else {
    params.set("filter", filter);
  }

  const queryString = params.toString();
  const newURL = queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname;

  window.history.replaceState({}, "", newURL);
}

function dedupeByText(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item.text)) return false;
    seen.add(item.text);
    return true;
  });
}

function getItemsForFilter(items, filter, options = {}) {
  const {
    min = 3,
    max = null
  } = options;

  if (!items || !items.length) return [];

  const broadItems = items.filter((item) => item.tags.includes("broad"));

  if (filter === "broad") {
    return max ? broadItems.slice(0, max) : broadItems;
  }

  const matched = items.filter((item) => item.tags.includes(filter));

  // Start with matched items first
  let result = [...matched];

  // Fill with broad items until we hit the minimum
  if (result.length < min) {
    const fillers = broadItems.filter(
      (broadItem) => !result.some((item) => item.text === broadItem.text)
    );

    result = [...result, ...fillers];
  }

  // Remove duplicates just in case
  result = dedupeByText(result);

  // Guarantee minimum if possible
  if (result.length < min) {
    const extras = items.filter(
      (item) => !result.some((existing) => existing.text === item.text)
    );
    result = [...result, ...extras];
  }

  result = dedupeByText(result);

  if (max) {
    return result.slice(0, max);
  }

  return result;
}

function getBulletsForFilter(job, filter) {
  return getItemsForFilter(job.bullets, filter, { min: 3 });
}

function getSkillsForFilter(job, filter) {
  return getItemsForFilter(job.keySkills, filter, { min: 3, max: 5 });
}

function renderSummary(filter = "broad") {
  if (!resumeSummary) return;
  resumeSummary.textContent = resumeSummaries[filter] || resumeSummaries.broad;
}

function renderResume(filter = "broad") {
  resumeList.innerHTML = "";

  if (!resumeData.length) {
    resumeList.innerHTML = `<div class="resume-empty">No resume data found.</div>`;
    return;
  }

  resumeData.forEach((job) => {
    const bullets = getBulletsForFilter(job, filter);
    const skills = getSkillsForFilter(job, filter);

    const article = document.createElement("article");
    article.className = `resume-job resume-job--${job.theme}`;

    article.innerHTML = `
      <div class="resume-job__meta">
        <h2 class="resume-job__company">${job.company}</h2>
        <p class="resume-job__title">${job.title}</p>
        <div class="resume-job__dates">${job.dates}</div>

        <div class="resume-job__skills">
          <h3 class="resume-job__skills-title">Key Skills</h3>
          <ul class="resume-job__skill-list">
            ${skills.map((skill) => `<li class="resume-job__skill">${skill.text}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="resume-job__content">
        <ul class="resume-job__bullets">
          ${bullets.map((bullet) => `<li>${bullet.text}</li>`).join("")}
        </ul>
      </div>
    `;

    resumeList.appendChild(article);
  });
}

function setActiveButton(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    setActiveButton(filter);
    setURLFilter(filter);
    renderSummary(filter);
    renderResume(filter);
  });
});

const initialFilter = getURLFilter();
setActiveButton(initialFilter);
renderSummary(initialFilter);
renderResume(initialFilter);
