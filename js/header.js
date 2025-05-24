document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  const isRoot = location.pathname === "/" || location.pathname === "/index.html";
  const iconPath = isRoot ? "assets/icons/moon.svg" : "../assets/icons/moon.svg";

  headerContainer.innerHTML = `
    <header>
      <div class="header-left">
        <h1 class="site-title">Brandon Rutlidge</h1>
        <nav class="site-nav">
          <a href="/">Home</a>
          <a href="/research/">Research</a>
          <a href="/about/">About</a>
          <a href="/contact/">Contact</a>
        </nav>
      </div>
      <button id="theme-toggle" aria-label="Toggle theme">
        <img id="theme-icon" src="${iconPath}" alt="Toggle Theme" />
      </button>
    </header>
  `;
});
