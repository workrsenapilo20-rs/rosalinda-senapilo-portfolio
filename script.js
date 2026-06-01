const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    if (currentTheme === 'light') {
      root.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
    } else {
      root.setAttribute('data-theme', 'light');
      themeToggle.textContent = '☀️';
    }
  });
}
