
const passwordDisplay = document.getElementById('password-display');
const generateBtn = document.getElementById('generate-btn');
const tooltip = document.getElementById('tooltip');
const passwordLengthInput = document.getElementById('password-length');
const lengthValue = document.getElementById('length-value');

function generatePassword(length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';

        setTimeout(() => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }, 1500);
    });
}

generateBtn.addEventListener('click', () => {
    const passwordLength = parseInt(passwordLengthInput.value, 10);
    const newPassword = generatePassword(passwordLength);
    passwordDisplay.textContent = newPassword;
});

passwordDisplay.addEventListener('click', () => {
    const password = passwordDisplay.textContent;
    if (password !== 'Click "Generate" to create a password') {
        copyToClipboard(password);
    }
});

passwordLengthInput.addEventListener('input', () => {
    lengthValue.textContent = passwordLengthInput.value;
});

// Create falling stars effect
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}

setInterval(createStar, 150);
