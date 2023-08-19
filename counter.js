let count = 0;
const counter = document.getElementById('counter');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.addEventListener('click', () => {
    count += 1;
    counter.innerText = `Count : ${count}`;
})

decrease.addEventListener('click', () => {
    count -= 1;
    counter.innerText = `Count : ${count}`;
})