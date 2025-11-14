document.addEventListener("DOMContentLoaded", () => {
  /* ============================
       Typewriter Effect
    ============================ */
  const typewriterElement = document.getElementById("typewriter");
  const textToType = "Nasmilzha Gusfiarta Rachmadi";
  let index = 0;

  const type = () => {
    if (typewriterElement && index < textToType.length) {
      typewriterElement.textContent += textToType[index];
      index++;
      setTimeout(type, 100);
    } else if (typewriterElement) {
      typewriterElement.classList.add("finished-typing");
    }
  };

  setTimeout(type, 500);

  const navbar = document.querySelector(".navbar-section");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const cursor = document.getElementById("typewriter");

  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  }, 400);

  /* ============================
       Dynamic Projects
    ============================ */
  const projects = [
    {
      title: "Desa Digital",
      description:
        "A full-stack web application simulating a digital platform for village services, with a focus on API security.",
      image: "Assets/porto/desa/desaHome.png",
      tags: ["Vue.js", "Laravel", "API Security"],
      link: "Views/desadigital.html",
    },
    {
      title: "Flappy Bird Clone",
      description:
        "A classic game clone built with Python to explore game loops, physics, and collision detection.",
      image: "Assets/porto/flappy/flappyHome.png",
      tags: ["Python", "Game Dev"],
      link: "Views/flappybird.html",
    },
    {
      title: "Gemini AI Android App",
      description:
        "An Android app integrating Google's Gemini AI, exploring mobile development and LLM applications.",
      image: "Assets/porto/gemini/geminiHome.png",
      tags: ["Java", "Android", "AI/ML"],
      link: "Views/geminiproject.html",
    },
    {
      title: "Inventory Management App",
      description:
        "A Java-based desktop application for managing product data, focusing on CRUD and data integrity.",
      image: "Assets/porto/barang/java1.png",
      tags: ["Java", "Desktop App"],
      link: "Views/javaBarang.html",
    },
    {
      title: "Translator Android App",
      description:
        "A simple translator app for Android using the Google Translate API to explore API integration.",
      image: "Assets/porto/translate/translateHome.png",
      tags: ["Java", "Android", "API"],
      link: "Views/translateandro.html",
    },
    {
      title: "Digital Wedding Invitation",
      description:
        "A responsive and elegant digital wedding invitation website with a focus on user experience.",
      image: "Assets/porto/wedding/weddingHome.png",
      tags: ["JavaScript", "Bootstrap"],
      link: "Views/wedding.html",
    },
    {
      title: "Chicken Steak Website",
      description:
        "A promotional website for a local steakhouse, focusing on branding and online presence.",
      image: "Assets/porto/acs/acsHome.png",
      tags: ["JavaScript", "Bootstrap"],
      link: "Views/chickensteak.html",
    },
  ];

  /* ============================
       Render Project Cards
    ============================ */
  const projectGrid = document.querySelector(".project-grid");

  if (projectGrid) {
    projectGrid.innerHTML = "";

    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";

      const tagsHTML = project.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");

      card.innerHTML = `
                <a href="${project.link}" class="project-card-link">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">${tagsHTML}</div>
                    </div>
                </a>
            `;

      projectGrid.appendChild(card);
    });
  }
});
