const audio = new Audio('./windowsError.mp3');
const body = document.querySelector('body');
const errorWindow = document.querySelector('.window');
const btn = document.querySelector('button');

btn.onclick = () => {
  errorWindow.remove();
  setTimeout(() => {
    body.style.height = '100vh';
    body.style.overflow = 'hidden';
    body.style.backgroundImage =
      'url("https://upload.wikimedia.org/wikipedia/commons/5/56/Bsodwindows10.png")';
    body.style.backgroundSize = 'cover';
  }, 3000);
};

window.addEventListener('mousedown', () => {
  if (!audio.paused) audio.currentTime = 0;
  audio.play();
});

errorWindow.addEventListener('mousedown', (e) => {
  e.stopPropagation();
});
