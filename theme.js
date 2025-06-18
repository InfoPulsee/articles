const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

html.classList.add('dark');
toggleBtn.textContent = 'Cветлая тема';

toggleBtn.addEventListener('click', () => {
  const isLight = html.classList.contains('light');
  
  html.classList.toggle('light', !isLight);
  html.classList.toggle('dark', isLight);

  toggleBtn.textContent = isLight ? 'Светлая тема' : 'Тёмная тема';
});
