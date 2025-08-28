let totalHearts = 0;
const navHeartCount = document.getElementById('heart-click-count');
const cardHearts = document.querySelectorAll('.card-heart');

document.addEventListener('click', function(){
totalHearts++;
  navHeartCount.textContent = totalHearts;
  });
