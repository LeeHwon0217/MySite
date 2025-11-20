const categories = document.querySelector(".categories");
const projectsContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  // console.log(filter)
  if (filter == null) {
    return;
  }
  activeSelection(e.target);
  filterProjects(filter);
});

function activeSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 300);
}

// Smooth scroll for header nav links
const headerNav = document.querySelector(".header__nav");
if (headerNav) {
  headerNav.addEventListener("click", (e) => {
    const target = e.target;
    // handle clicks on <a href="#..."> inside nav
    if (target && target.tagName === "A") {
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const id = href.slice(1);
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  });
}
