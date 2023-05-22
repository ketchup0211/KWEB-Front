/*버튼을 클릭하면 input에 입력된 값이 1 이상 9 이하의 자연수면 입력된 값의 구구단을 #times-result에 출력하고,
아닌 경우에는 Input Error!를 출력하는 함수를 times-table.js의 displayTimes 함수에 작성하여라. */
//input 태그에 입력된 값은 value 속성을 통해 접근할 수 있음을 이용하여라.
//Exercise 4.2
const setErrorText = element => element.innerText = 'Input Error!';
const displayTimes = () => {
    const number = document.getElementById('number').value;
    const parsedNumber = parseInt(number);
    const timesResult = document.getElementById('times-result');
    if (!isFinite(parsedNumber) || isNaN(parsedNumber)) return setErrorText(timesResult);
    if (parsedNumber != number) return setErrorText(timesResult);
    if (parsedNumber < 1 || parsedNumber > 9) return setErrorText(timesResult);
    const result = [];
    for (let i = 1; i <= 9; i++) {
        result.push(parsedNumber + ' X ' + i + ' = ' + parsedNumber * i);
    }
    timesResult.innerText = result.join('\n');
};