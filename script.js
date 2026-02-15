const button = document.getElementById('floatingBtn');
button.addEventListener('mouseenter', () => {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight; 

    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

const heartContainer = document.querySelector('.heart-container');
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    

    heart.style.left = Math.random() * 100 + 'vw'; 
    
    
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; 
    
    heartContainer.appendChild(heart);
    
    
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}
setInterval(createHeart, 500); 