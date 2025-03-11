// Alert user when they click the submit button
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('input[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent form submission
            alert('Thank you for your submission!');
        });
    }

    // Toggle dark mode
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px 15px';
    toggleButton.style.cursor = 'pointer';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});

// Dark mode styles
const darkModeStyles = `
body.dark-mode {
    background-color: #222;
    color: #ddd;
}
table th, table td {
    background-color: #333;
    color: #ddd;
    border-color: #555;
}
a {
    color: #62dafb;
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
