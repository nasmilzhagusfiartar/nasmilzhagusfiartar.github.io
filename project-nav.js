document.addEventListener("DOMContentLoaded", () => {
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

  const container = document.getElementById("project-navigation");
  if (!container) return;

  // Tentukan path saat ini & normalisasikan
  const currentPath = window.location.pathname.split("/").pop();
  const normalizedCurrentPath = `Views/${currentPath}`;

  const currentIndex = projects.findIndex(
    (p) => p.link === normalizedCurrentPath
  );

  if (currentIndex === -1) return; // Proyek saat ini tidak ditemukan

  // Tentukan proyek sebelumnya dan berikutnya dengan pembungkusan
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  // Buat HTML navigasi
  const navHTML = `
        <a href="../${prevProject.link}" class="nav-button prev">
            <i class="bi bi-arrow-left-circle"></i>
            <span>Previous Project</span>
            <span class="nav-title">${prevProject.title}</span>
        </a>
        <a href="../${nextProject.link}" class="nav-button next">
            <span>Next Project</span>
            <i class="bi bi-arrow-right-circle"></i>
            <span class="nav-title">${nextProject.title}</span>
        </a>
    `;

  container.innerHTML = navHTML;
});
