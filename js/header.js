document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  const iconPath = "/assets/icons/moon.svg"; // Use root-relative path

  headerContainer.innerHTML = `
    <header>
      <div class="header-left">
        <h1 class="site-title">Brandon Rutlidge</h1>
        <nav class="site-nav">
          <a href="/">Home</a>
          <a href="/research/">Research</a>
          <a href="/about/">About</a>
          <a href="/contact/">Contact</a>
          <button id="theme-toggle" aria-label="Toggle theme">
            <img id="theme-icon" src="${iconPath}" alt="Toggle Theme" />
          </button>
        </nav>
      </div>
    </header>
  `;
});
