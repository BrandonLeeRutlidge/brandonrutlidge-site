const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const root = document.documentElement;

// Only update icon, don’t re-set the theme on load (it's already set early)
function updateThemeIcon(theme) {
  const icon = theme === 'dark' ? 'moon' : 'sun';
  themeIcon.src = `assets/icons/${icon}.svg`;
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

toggleButton.addEventListener('click', toggleTheme);

// Initialize only the icon (theme is already set in <head>)
updateThemeIcon(document.documentElement.getAttribute('data-theme'));
