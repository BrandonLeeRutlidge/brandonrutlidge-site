document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (!themeToggle || !themeIcon) return;

  const isRoot = location.pathname === "/" || location.pathname === "/index.html";
  const assetPath = isRoot ? "assets/icons" : "../assets/icons";

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeIcon.src = `${assetPath}/${theme === "dark" ? "sun" : "moon"}.svg`;
  };

  const currentTheme = localStorage.getItem("theme") || "light";
  setTheme(currentTheme); // Initialize icon and theme

  themeToggle.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
});
