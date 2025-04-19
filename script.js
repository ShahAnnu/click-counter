let count = 0;

const countDisplay = document.getElementById('count');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');
const clickSound = document.getElementById('clickSound');

// Animate count from current to new value
function animateCount(newCount) {
  const current = parseInt(countDisplay.textContent);
  const diff = newCount - current;
  const duration = 200;
  const steps = 10;
  let step = 0;

  const interval = setInterval(() => {
    step++;
    countDisplay.textContent = Math.round(current + (diff * (step / steps)));
    if (step === steps) clearInterval(interval);
  }, duration / steps);
}

// Click Event
clickBtn.addEventListener('click', () => {
  count++;
  animateCount(count);
  clickSound.play();

  // Confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Bounce button
  clickBtn.classList.add('bounce');
  setTimeout(() => clickBtn.classList.remove('bounce'), 400);

  // Count pop animation
  countDisplay.classList.add('pop');
  setTimeout(() => countDisplay.classList.remove('pop'), 300);4
});

// Reset Event
resetBtn.addEventListener('click', () => {
  count = 0;
  animateCount(count);

  // Bounce button
  resetBtn.classList.add('bounce');
  setTimeout(() => resetBtn.classList.remove('bounce'), 400);

  // Pop reset
  countDisplay.classList.add('pop');
  setTimeout(() => countDisplay.classList.remove('pop'), 300);
});

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
