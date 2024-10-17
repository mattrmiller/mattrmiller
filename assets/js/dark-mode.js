const toggleSwitch = document.querySelector('#dark-mode-toggle');
toggleSwitch.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', toggleSwitch.checked ? 'dark' : 'light');
    localStorage.setItem('theme', toggleSwitch.checked ? 'dark' : 'light');
});

// Load theme from local storage
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    toggleSwitch.checked = theme === 'dark';
});
