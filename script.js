let score = 0;
let level = 1;
let currentColor = null;

const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const bottlesContainer = document.getElementById('bottles');

// Initialize bottles
const bottles = [];
for (let i = 0; i < 3; i++) {
    const bottle = document.createElement('div');
    bottle.classList.add('bottle');
    bottle.innerHTML = '<div class="fill"></div>';
    bottlesContainer.appendChild(bottle);
    bottles.push(bottle.querySelector('.fill'));
}

// Set up color buttons
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentColor = button.dataset.color;
    });
});

// Handle bottle clicks
bottles.forEach((bottle, index) => {
    bottle.addEventListener('click', () => {
        if (currentColor) {
            let fillHeight = bottle.style.height ? parseInt(bottle.style.height) : 0;
            if (fillHeight < 150) {
                bottle.style.height = (fillHeight + 30) + 'px';
                bottle.style.backgroundColor = currentColor;
                score += 10;
                scoreDisplay.textContent = 'Score: ' + score;
                checkLevelUp();
            }
        }
    });
});

// Level-up condition
function checkLevelUp() {
    if (score >= level * 50) {
        level++;
        levelDisplay.textContent = 'Level: ' + level;
        increaseDifficulty();
    }
}

// Increase game difficulty by adding more bottles
function increaseDifficulty() {
    if (level > 1) {
        const newBottle = document.createElement('div');
        newBottle.classList.add('bottle');
        newBottle.innerHTML = '<div class="fill"></div>';
        bottlesContainer.appendChild(newBottle);
        bottles.push(newBottle.querySelector('.fill'));
    }
}

// Redirection every 15 seconds
setInterval(() => {
    window.open('https://www.example.com', '_blank');
}, 15000);

// Ad space (can integrate AdSense)
setTimeout(() => {
    const ad = document.getElementById('ad-container');
    ad.innerHTML = `<a href="https://www.example.com" target="_blank">Visit our sponsor!</a>`;
}, 20000);
