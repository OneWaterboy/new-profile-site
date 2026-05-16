(function () {
  const navLinks = [
    { href: "index.html", label: "Home", match: ["", "index.html"] },
    { href: "resume.html", label: "Resume", match: ["resume.html"] },
    { href: "outside.html", label: "Outside of Work", match: ["outside.html"] },
    { href: "contact.html", label: "Contact", match: ["contact.html", "thanks.html"] }
  ];

  const header = document.querySelector("[data-site-nav]");

  if (header) {
    const currentPage = window.location.pathname.split("/").pop();
    const links = navLinks
      .map((link) => {
        const isActive = link.match.includes(currentPage);
        const activeAttrs = isActive ? ' aria-current="page"' : "";
        const activeClass = isActive ? " is-active" : "";

        return `<a class="nav__link${activeClass}" href="${link.href}"${activeAttrs}>${link.label}</a>`;
      })
      .join("");

    header.innerHTML = `
      <nav class="nav" aria-label="Primary">
        <a class="nav__brand" href="index.html" aria-label="Home">
          <img src="images/ar-logo-circle.svg" alt="AR logo" class="nav__logo">
        </a>
        <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="navMenu">
          <span class="sr-only">Open menu</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
        </button>
        <div class="nav__menu" id="navMenu">
          ${links}
        </div>
      </nav>
    `;
  }

  const btn = document.querySelector(".nav__toggle");
  const menu = document.querySelector("#navMenu");

  if (btn && menu) {
    const closeMenu = () => {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    };

    btn.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("is-open")) return;
      const clickedInside = menu.contains(e.target) || btn.contains(e.target);

      if (!clickedInside) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    });
  }

  const email = "abrahmrollins@gmail.com";
  const copyBtn = document.getElementById("copyEmailBtn");
  const toast = document.getElementById("emailToast");

  if (copyBtn && toast) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
        }, 2000);
      } catch (err) {
        console.error("Copy failed", err);
      }
    });
  }
})();
