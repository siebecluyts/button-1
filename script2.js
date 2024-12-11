document.querySelector('.cool-button').addEventListener('click', function (e) {
    const button = e.currentTarget;
  
    // Add the sliding animation by modifying its position
    button.style.transition = 'transform 0.5s ease';
    button.style.transform = 'translateX(300px)';
  
    // Redirect after the animation ends
    setTimeout(() => {
      window.location.href = '/index.html';
    }, 500); // Delay matches the animation duration
  });
  