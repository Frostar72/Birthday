document.getElementById('showCardButton').addEventListener('click', function () {
  const button = document.getElementById('showCardButton');
  const card = document.getElementById('birthdayCard');

  // Hide the button
  button.style.display = 'none';

  // Show the card with the wishes
  card.classList.remove('hidden');
  card.classList.add('open');
  
  // Create confetti effect
  createConfetti();
});

document.querySelector('.close-btn').addEventListener('click', function() {
  const button = document.getElementById('showCardButton');
  const card = document.getElementById('birthdayCard');
  
  card.classList.remove('open');
  card.classList.add('hidden');
  button.style.display = 'block';
});

function createConfetti() {
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = -10 + 'px';
    confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    
    document.body.appendChild(confetti);
    
    const animationDuration = Math.random() * 3 + 2;
    
    confetti.style.animation = `fall ${animationDuration}s linear forwards`;
    
    // Create keyframes for falling animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 1;
          left: ${Math.random() * 100}vw;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
      style.remove();
    }, animationDuration * 1000);
  }
}
