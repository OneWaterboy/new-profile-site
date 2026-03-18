const resumeSummaries = {
  broad: "Inventory and operations professional with experience spanning shipping and receiving, inventory control, warehouse operations, replenishment planning, and e-commerce systems support.",
  shipping: "Shipping and receiving experience centered on inbound flow, documentation verification, staging, freight handling, and coordination across warehouse and field operations.",
  inventory: "Inventory-focused experience in stock accuracy, reconciliation, cycle counts, discrepancy resolution, replenishment support, and inventory data integrity across physical and digital systems.",
  warehouse: "Warehouse operations experience supporting receiving, staging, fulfillment flow, picking efficiency, material movement, and safe, organized day-to-day execution.",
  leadership: "Hands-on team lead experience directing workflows, training staff, improving process consistency, and supporting safe, efficient operations across fast-paced environments.",
  systems: "Systems-oriented experience supporting e-commerce operations, inventory data accuracy, reporting, backend workflows, and platform integrations across storefront and operational tools."
};

const resumeData = [
  {
    company: "Kingz Container Crew",
    title: "Inventory Control Clerk / Team Lead",
    dates: "2025 – 2026",
    theme: "forest",
    keySkills: [
      { text: "Container Receiving", tags: ["broad", "shipping"] },
      { text: "Inventory Reconciliation", tags: ["broad", "inventory"] },
      { text: "Warehouse Staging", tags: ["broad", "warehouse"] },
      { text: "Team Leadership", tags: ["broad", "leadership"] },
      { text: "Forklift & Clamp Truck Operation", tags: ["broad", "shipping", "warehouse"] }
    ],
    bullets: [
      { text: "Supervised inbound container receiving and unloading operations, leading teams of up to 8 staff in high-volume environments", tags: ["broad", "shipping", "warehouse", "leadership"] },
      { text: "Verified shipment contents against manifests and purchase orders, ensuring accurate receipt and resolving discrepancies", tags: ["broad", "shipping", "inventory"] },
      { text: "Coordinated container devanning workflow including unloading, sorting, labeling, and staging for warehouse intake", tags: ["broad", "shipping", "warehouse"] },
      { text: "Operated forklifts, clamp trucks, and slip-sheet attachments to extract and stage palletized and floor-loaded freight", tags: ["broad", "shipping", "warehouse"] },
      { text: "Maintained organized staging lanes and unloading zones to support efficient receiving and downstream distribution", tags: ["broad", "shipping", "warehouse"] },

      { text: "Verified inbound shipment contents against manifests, SKUs, and purchase orders to maintain inventory accuracy during receipt", tags: ["broad", "inventory", "shipping"] },
      { text: "Performed inventory counts, labeling, and reconciliation to ensure alignment between physical stock and documentation", tags: ["broad", "inventory"] },
      { text: "Investigated and resolved inventory discrepancies in coordination with warehouse teams and clients", tags: ["broad", "inventory", "leadership"] },
      { text: "Supported cycle counts, spot checks, and inventory audits to maintain high levels of stock accuracy", tags: ["inventory"] },
      { text: "Maintained organized staging and labeling processes to ensure traceability and efficient inventory handling", tags: ["broad", "inventory", "warehouse"] },

      { text: "Assigned daily tasks and directed workflow across unloading, staging, and inventory preparation activities", tags: ["broad", "leadership", "warehouse"] },
      { text: "Trained and onboarded new employees, reinforcing safety procedures, productivity standards, and quality expectations", tags: ["broad", "leadership"] },
      { text: "Coordinated end-to-end devanning operations to ensure efficient material flow and minimize bottlenecks", tags: ["broad", "warehouse", "leadership"] },
      { text: "Maintained safe, organized work areas and staging zones to support consistent warehouse performance", tags: ["broad", "warehouse"] },
      { text: "Optimized unloading and staging processes to improve throughput and operational efficiency", tags: ["warehouse", "leadership"] }
    ]
  },

  {
    company: "Sidekicker",
    title: "Inventory Clerk (Contract)",
    dates: "2024 – 2025",
    theme: "graphite",
    keySkills: [
      { text: "Purchase Order Reconciliation", tags: ["broad", "shipping", "inventory"] },
      { text: "Inventory Tracking", tags: ["broad", "inventory"] },
      { text: "Material Allocation", tags: ["broad", "shipping", "inventory"] },
      { text: "Warehouse Organization", tags: ["broad", "warehouse"] },
      { text: "Cross-Functional Coordination", tags: ["broad", "leadership"] }
    ],
    bullets: [
      { text: "Maintained accurate inventory of parts, tools, and materials to support daily operations and field service teams", tags: ["broad", "inventory"] },
      { text: "Processed incoming shipments and reconciled received goods against purchase orders to ensure inventory accuracy", tags: ["broad", "inventory", "shipping"] },
      { text: "Organized warehouse inventory to improve accessibility and reduce time spent locating materials", tags: ["broad", "inventory", "warehouse"] },
      { text: "Supported inventory tracking and record accuracy through consistent updates and stock organization", tags: ["inventory"] },
      { text: "Assisted with cycle counts and inventory checks to maintain reliable stock levels", tags: ["inventory"] },

      { text: "Processed inbound shipments and verified received goods against purchase orders and delivery documentation", tags: ["broad", "shipping"] },
      { text: "Coordinated order fulfillment and material allocation to ensure timely delivery of inventory to field teams", tags: ["broad", "shipping", "inventory"] },
      { text: "Maintained organized receiving and storage areas to support efficient material flow through the warehouse", tags: ["shipping", "warehouse"] },
      { text: "Assisted with tracking incoming and outgoing inventory to ensure accurate movement of goods", tags: ["shipping", "inventory"] },

      { text: "Coordinated inventory and material availability for field teams, ensuring crews had required tools and components to complete daily work", tags: ["broad", "leadership", "inventory"] },
      { text: "Supported order tracking and fulfillment processes to maintain consistent operational flow", tags: ["systems", "inventory"] },
      { text: "Worked cross-functionally with operations staff and field teams to align inventory availability with job requirements", tags: ["broad", "leadership"] },
      { text: "Maintained organized inventory systems to reduce delays and improve efficiency in field operations", tags: ["warehouse", "inventory"] },
      { text: "Helped ensure continuity of operations by proactively managing inventory availability and material readiness", tags: ["broad", "inventory"] }
    ]
  },

  {
    company: "FDG Web & Alpine Web Works",
    title: "E-commerce Systems & Inventory Operations",
    dates: "2021 – 2025",
    theme: "alpine",
    keySkills: [
      { text: "Shopify Operations", tags: ["broad", "systems"] },
      { text: "Inventory Data Accuracy", tags: ["broad", "inventory", "systems"] },
      { text: "System Integrations", tags: ["broad", "systems"] },
      { text: "Reporting & Data Validation", tags: ["broad", "systems"] },
      { text: "Shipping Platform Coordination", tags: ["broad", "systems", "shipping"] }
    ],
    bullets: [
      { text: "Managed product, SKU, and inventory data across e-commerce platforms to ensure accurate listings and stock visibility", tags: ["broad", "inventory", "systems"] },
      { text: "Maintained alignment between storefront inventory and backend systems, reducing discrepancies and improving fulfillment accuracy", tags: ["broad", "inventory", "systems"] },
      { text: "Supported order processing and fulfillment workflows to ensure smooth end-to-end e-commerce operations", tags: ["broad", "systems"] },
      { text: "Assisted in identifying and resolving inventory discrepancies across systems to maintain data integrity", tags: ["broad", "inventory", "systems"] },
      { text: "Helped optimize product organization and inventory structure to improve operational efficiency", tags: ["inventory", "systems"] },

      { text: "Integrated Shopify storefronts with inventory systems, shipping platforms, and reporting tools to streamline operations", tags: ["broad", "systems", "shipping"] },
      { text: "Troubleshot and resolved data sync issues between systems, improving reliability of inventory and order workflows", tags: ["systems", "inventory"] },
      { text: "Supported backend system updates and workflow improvements to enhance order processing and fulfillment efficiency", tags: ["systems"] },
      { text: "Worked with APIs and system integrations to maintain consistent data flow across e-commerce operations", tags: ["systems"] },
      { text: "Identified root causes of inventory and order discrepancies and implemented corrective solutions to improve system reliability", tags: ["systems", "inventory"] },

      { text: "Used Excel and database queries to analyze inventory data and identify discrepancies across systems", tags: ["broad", "systems", "inventory"] },
      { text: "Compared and reconciled SKU-level inventory data between platforms to ensure accuracy and consistency", tags: ["inventory", "systems"] },
      { text: "Supported reporting and data validation processes to improve visibility into inventory performance", tags: ["systems"] },
      { text: "Investigated inventory and order processing issues using structured, data-driven problem solving", tags: ["broad", "systems"] },
      { text: "Maintained high levels of data accuracy across product and inventory systems to support operational decision-making", tags: ["broad", "inventory", "systems"] }
    ]
  },

  {
    company: "Universal Standard",
    title: "Inventory Planner",
    dates: "2019 – 2020",
    theme: "alpine",
    keySkills: [
      { text: "Replenishment Planning", tags: ["broad", "inventory"] },
      { text: "Excel Inventory Analysis", tags: ["broad", "inventory", "systems"] },
      { text: "Shipment Tracking", tags: ["broad", "shipping"] },
      { text: "Cross-Functional Planning", tags: ["broad", "leadership", "inventory"] },
      { text: "Inventory Reporting", tags: ["broad", "systems"] }
    ],
    bullets: [
      { text: "Managed inventory tracking and replenishment across 13 retail locations, ensuring consistent product availability and minimizing stockouts", tags: ["broad", "inventory"] },
      { text: "Used Excel (pivot tables, lookups) to analyze inventory levels, identify shortages, and support data-driven replenishment decisions", tags: ["broad", "inventory", "systems"] },
      { text: "Maintained accurate inventory records across inbound, outbound, and transfer activity, improving visibility into stock position across locations", tags: ["broad", "inventory"] },
      { text: "Monitored inventory performance and flagged risks related to stockouts and overstock, supporting more efficient inventory allocation", tags: ["inventory", "systems"] },
      { text: "Collaborated with cross-functional teams to align inventory levels with demand, improving coordination between warehouse and retail operations", tags: ["broad", "inventory", "leadership"] },

      { text: "Tracked and coordinated inbound and outbound shipments supporting inventory flow across 13 retail locations", tags: ["broad", "shipping"] },
      { text: "Monitored inventory transfers between locations to ensure timely product availability and reduce fulfillment delays", tags: ["shipping", "inventory"] },
      { text: "Maintained visibility into inventory movement across the supply chain, supporting consistent stock availability at retail locations", tags: ["shipping", "inventory"] },

      { text: "Generated Excel-based inventory reports to support leadership decision-making and operational planning", tags: ["broad", "systems", "leadership"] },
      { text: "Assisted with procurement and purchasing activities, helping align inventory levels with demand and business goals", tags: ["systems", "leadership"] },
      { text: "Analyzed inventory trends and stock performance to identify risks and improve overall inventory health", tags: ["systems", "inventory"] },
      { text: "Supported data accuracy across inventory systems, ensuring reliable inputs for reporting and planning processes", tags: ["systems"] }
    ]
  },

  {
    company: "Contract Furnishings Mart",
    title: "Warehouse / Inventory Operations",
    dates: "2017 – 2019",
    theme: "graphite",
    keySkills: [
      { text: "Warehouse Operations", tags: ["broad", "warehouse"] },
      { text: "Cycle Counts", tags: ["broad", "inventory"] },
      { text: "Picking Efficiency", tags: ["broad", "warehouse"] },
      { text: "Order Fulfillment Support", tags: ["broad", "shipping", "warehouse"] },
      { text: "Team Training", tags: ["broad", "leadership"] }
    ],
    bullets: [
      { text: "Coordinated daily warehouse operations to support efficient order fulfillment and material flow", tags: ["broad", "warehouse"] },
      { text: "Organized warehouse layout and staging areas to improve picking efficiency and reduce handling time", tags: ["broad", "warehouse", "inventory"] },
      { text: "Supported receiving, stocking, and order preparation processes to maintain consistent operational flow", tags: ["broad", "warehouse", "shipping"] },
      { text: "Maintained clean, organized work areas to support safe and efficient warehouse operations", tags: ["broad", "warehouse"] },
      { text: "Assisted in improving workflow processes to optimize productivity and reduce operational delays", tags: ["warehouse"] },

      { text: "Conducted cycle counts and inventory audits to maintain accurate stock levels and identify discrepancies", tags: ["broad", "inventory"] },
      { text: "Investigated inventory variances and supported resolution to improve inventory accuracy and reliability", tags: ["inventory"] },
      { text: "Maintained organized inventory systems to ensure accurate tracking and efficient stock handling", tags: ["inventory", "warehouse"] },
      { text: "Supported inventory control processes to align physical stock with system records", tags: ["inventory"] },

      { text: "Supervised daily warehouse workflows and supported team coordination across inventory and fulfillment activities", tags: ["broad", "leadership", "warehouse"] },
      { text: "Trained team members on inventory procedures, warehouse processes, and safety standards", tags: ["broad", "leadership"] },
      { text: "Identified inefficiencies in warehouse layout and implemented improvements to increase picking efficiency", tags: ["leadership", "warehouse"] },
      { text: "Supported process improvements to enhance workflow consistency and operational performance", tags: ["leadership"] },
      { text: "Maintained safe working conditions by reinforcing safety procedures and best practices", tags: ["leadership"] }
    ]
  }
];

const resumeList = document.getElementById("resumeList");
const filterButtons = document.querySelectorAll(".resume-filter");
const resumeSummary = document.getElementById("resumeSummary");

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