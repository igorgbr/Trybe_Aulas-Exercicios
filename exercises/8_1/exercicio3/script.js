const bntClick = document.querySelector('#click');
const lblCount = document.querySelector('#count');
const divImg = document.querySelector('#image');

let clickCount = 0;
bntClick.addEventListener('click', () => {
    clickCount += 1;
    lblCount.innerHTML = Number.parseInt(clickCount);
});


