const toggleButton = document.getElementById('theme-toggle');
const popupButton = document.getElementById('pop-btn');
const secondary = document.getElementById('secondary');
const btn = document.getElementById('btn');
const sub = document.getElementById('sub');
const waitlist = document.getElementsByClassName('openPopup');
const submit = document.getElementById('submit');
const body = document.body;
const moon = `
<path d="M25.6668 18.9846C24.1345 19.6776 22.4335 20.0633 20.6426 20.0633C13.9013 20.0633 8.43652 14.5985 8.43652 7.85731C8.43652 6.06625 8.82226 4.36531 9.51523 2.83301C5.28022 4.74824 2.3335 9.01016 2.3335 13.9603C2.3335 20.7016 7.79833 26.1663 14.5395 26.1663C19.4897 26.1663 23.7516 23.2196 25.6668 18.9846Z" fill="#525252" stroke="#202020" stroke-linecap="round" stroke-linejoin="round"/>
`;
const sun = `
    <path d="M14.0002 2.83301V5.16634V2.83301ZM14.0002 23.833V26.1663V23.833ZM4.66683 14.4997H2.3335H4.66683ZM7.36664 7.86615L5.71671 6.21622L7.36664 7.86615ZM20.6337 7.86615L22.2836 6.21622L20.6337 7.86615ZM7.36664 21.138L5.71671 22.7879L7.36664 21.138ZM20.6337 21.138L22.2836 22.7879L20.6337 21.138ZM25.6668 14.4997H23.3335H25.6668ZM19.8335 14.4997C19.8335 17.7213 17.2218 20.333 14.0002 20.333C10.7785 20.333 8.16683 17.7213 8.16683 14.4997C8.16683 11.278 10.7785 8.66634 14.0002 8.66634C17.2218 8.66634 19.8335 11.278 19.8335 14.4997Z" fill="#BEBEBE"/>
    <path d="M14.0002 2.83301V5.16634M14.0002 23.833V26.1663M4.66683 14.4997H2.3335M7.36664 7.86615L5.71671 6.21622M20.6337 7.86615L22.2836 6.21622M7.36664 21.138L5.71671 22.7879M20.6337 21.138L22.2836 22.7879M25.6668 14.4997H23.3335M19.8335 14.4997C19.8335 17.7213 17.2218 20.333 14.0002 20.333C10.7785 20.333 8.16683 17.7213 8.16683 14.4997C8.16683 11.278 10.7785 8.66634 14.0002 8.66634C17.2218 8.66634 19.8335 11.278 19.8335 14.4997Z" stroke="#F4F4F0" stroke-linecap="round" stroke-linejoin="round"/>
`;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('dark', savedTheme === 'dark');
    if (savedTheme == 'dark') {
        toggleButton.innerHTML = sun;
    }
    else {
        toggleButton.innerHTML = moon;
    }
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Save current theme to localStorage
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    if (theme == 'dark') {
        toggleButton.innerHTML = sun;
    }
    else {
        toggleButton.innerHTML = moon;
    }
});

document.querySelectorAll('.openPopup').forEach(element => {
    element.addEventListener('click', () => {
        if (!secondary.classList.contains('dissapear')) {
            secondary.classList.toggle('dissapear');
            btn.classList.toggle('dissapear');
            sub.classList.toggle('dissapear');
            popup.classList.toggle('dissapear');
        }
    
        document.getElementById('intro').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    })
})


submit.addEventListener('click', () => {
    secondary.classList.toggle('dissapear');
    btn.classList.toggle('dissapear');
    sub.classList.toggle('dissapear');
    popup.classList.toggle('dissapear');
})