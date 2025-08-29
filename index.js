const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('dark', savedTheme === 'dark');
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Save current theme to localStorage
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});