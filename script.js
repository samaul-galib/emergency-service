let totalHearts = 0;
const heartClickCount = document.getElementById('heart-click-count');
const cardHearts = document.querySelectorAll('.card-heart');

cardHearts.forEach(function(img) {
img.addEventListener('click', function(){
totalHearts++;
  heartClickCount.textContent = totalHearts;
  });
});

let totalCoins = 100;
const navCoinCount = document.getElementById('coin-count');
const cardCoins = document.querySelectorAll('.card-coin');

navCoinCount.textContent = totalCoins;

cardCoins.forEach(function(img) {
  img.onclick = function () {
    if (totalCoins >= 20) {
      totalCoins -= 20;
      navCoinCount.textContent = totalCoins;
      alert("You spent 20 coins!");
    } else {
      alert("You don't have enough coins to call");
    }
  };
});

let totalCopy = 0;
const copyCount = document.getElementById('copy-count');
const buttons = document.querySelectorAll('.card-copy');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const number = button.closest('.card-body').querySelector('h2').innerText;
    
    navigator.clipboard.writeText(number);

    totalCopy++;
    copyCount.textContent = totalCopy;

    alert("Copied: " + number);
  });
});

