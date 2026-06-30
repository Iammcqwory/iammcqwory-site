const ventures = {
  waziri: {
    title: "Waziri Collective Labs",
    copy:
      "We don't pitch AI transformation. We find the thing breaking your operation and fix it.",
    role: "AI Strategy & Automation",
    system: "Business Systems Audit, agents, workflow automation",
    url: "https://waziricollectivelabs.vercel.app/",
  },
  nairobi: {
    title: "The Nairobi Post",
    copy:
      "A culture and business media property built around sharper editorial packaging, repeatable publishing cadence, and distribution loops.",
    role: "Publisher",
    system: "Editorial calendar, content ops, audience growth",
    url: "https://thenairobipost.vercel.app/",
  },
  sounds: {
    title: "Sounds from Kenya",
    copy:
      "A music discovery platform turning Kenyan creative signal into stories, playlists, creator profiles, and social-native media.",
    role: "Creative Direction",
    system: "Discovery workflow, media templates, community loops",
  },
  sitini: {
    title: "Studio Sitini",
    copy:
      "A production studio concept for visual storytelling, campaign assets, identity systems, photography, and film direction.",
    role: "Creative Lead",
    system: "Production briefs, asset pipeline, brand language",
  },
  mamabora: {
    title: "Mamabora",
    copy:
      "AI-powered parenting companion for mothers and caregivers, providing expert guidance, milestone tracking, and instant support.",
    role: "Founder / Product Builder",
    system: "Health tech, parenting support, caregiver workflows",
    url: "https://mamabora.lovable.app/",
  },
  vijanabora: {
    title: "Vijanabora",
    copy:
      "Mental health advocacy for youth in Kenya and other developing places in Africa.",
    role: "Impact Venture",
    system: "Youth advocacy, mental health, social proof",
    url: "https://vijanabora.vercel.app",
  },
  gituliza: {
    title: "GitUliza",
    copy:
      "Repository intelligence for understanding codebases faster, from structure to decisions to next actions.",
    role: "AI Tool / Developer Systems",
    system: "Repository analysis, code intelligence, workflow support",
    url: "https://gituliza.vercel.app/",
  },
  thinkbora: {
    title: "ThinkBora",
    copy:
      "Africa's AI talent pipeline built on real work. ThinkBora trains young people in data, AI, and business innovation through live client projects.",
    role: "Talent & Skills Venture",
    system: "Skills, projects, careers, project-based curriculum",
    url: "https://thinkbora.vercel.app/",
  },
};

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");
const venturesGrid = document.getElementById("venturesGrid");
const ventureDetail = document.getElementById("ventureDetail");

function renderVenture(key) {
  const venture = ventures[key] || ventures.waziri;
  ventureDetail.innerHTML = `
    <div>
      <h3>${venture.title}</h3>
      <p>${venture.copy}</p>
      ${
        venture.url
          ? `<a class="venture-link" href="${venture.url}" target="_blank" rel="noopener">Visit ${venture.title}</a>`
          : ""
      }
    </div>
    <div class="venture-meta">
      <div>
        <span>Role</span>
        <strong>${venture.role}</strong>
      </div>
      <div>
        <span>System</span>
        <strong>${venture.system}</strong>
      </div>
    </div>
  `;
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

venturesGrid.querySelectorAll(".venture-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    venturesGrid.querySelectorAll(".venture-pill").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    pill.classList.add("active");
    pill.setAttribute("aria-selected", "true");
    renderVenture(pill.dataset.venture);
  });
});

renderVenture("waziri");

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
