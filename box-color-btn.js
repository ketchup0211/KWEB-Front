/*버튼을 클릭하면 다섯 개 상자 중 두 번째 상자의 색을 변경하는 함수를
box-color-btn.js 의 changeBoxColor 함수에 작성하여라.*/
//Exercise 4.3
const changeBoxColor = () => {
    const box = document.getElementsByClassName('box')[1];
    box.style.backgroundColor = 'blue';
};