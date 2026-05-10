// Add your image URLs here
const glitchImages = [
    'img/glitch1.png',
    'img/glitch2.png',
    'img/glitch3.png',
    'img/glitch4.png',
    'img/glitch5.png',
    'img/glitch6.png',
    'img/glitch7.png',
];

const overlay = document.getElementById('glitch-overlay');

function createGlitch() {
    const img = document.createElement('img');
    
    // Pick a random image from our list
    img.src = glitchImages[Math.floor(Math.random() * glitchImages.length)];
    img.className = 'glitch-img';

    // Randomize position (0 to 100% of the screen)
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Randomize size (between 30% and 50% of screen width)
    const size = 30 + Math.random() * 40;

    img.style.left = `${x}%`;
    img.style.top = `${y}%`;
    img.style.width = `${size}vw`;

    overlay.appendChild(img);

    // Remove the image after a very short time (50ms to 200ms)
    const duration = 100 + Math.random() * 150;
    setTimeout(() => {
        img.remove();
    }, duration);
}

// Function to trigger glitches at random intervals
function glitchLoop() {
    createGlitch();
    
    // Wait between 100ms and 2 seconds before the next glitch
    const nextGlitchIn = 50 + Math.random() * 1000;
    setTimeout(glitchLoop, nextGlitchIn);
}

// Start the loop
glitchLoop();