window.onload = function() {
    const overlayText = document.querySelector('.overlay-text');
    overlayText.style.opacity = '0';
    overlayText.style.transition = 'opacity 1s ease-in-out';
  
    setTimeout(() => {
      overlayText.style.opacity = '1';
    }, 300);
  };