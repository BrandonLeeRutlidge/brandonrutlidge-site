document.getElementById('header-container').innerHTML = `
  <header>
    <div class="header-left">
      <div>
        <h1 class="site-title">Brandon Rutlidge</h1>
        <nav class="site-nav">
          <a href="index.html">Home</a>
          <a href="research.html">Research</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
    </div>
    <button id="theme-toggle" aria-label="Toggle theme">
      <img id="theme-icon" src="assets/icons/sun.svg" alt="Theme Icon" />
    </button>
  </header>
`;
