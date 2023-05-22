/*버튼을 클릭하면 #color-box의 배경색을 랜덤하게 바꾸는 setRandomBgColor 함수를 random-color-box.js에 작성하여라.*/
//색상은 R, G, B의 값으로 표현될 수 있고, 각 값은 0 이상 256 미만의 정수임을 이용하여라.
//Exercise 4.1
const setRandomBgColor = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const newColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
    document.getElementById('color-box').style.backgroundColor = newColor;
};