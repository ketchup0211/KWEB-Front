/*인자로 받은 값이 1 이상 9 이하의 정수인지 판별하여 결과를 반환하는 함수 isValidNumber를 구현하여라.*/
const isValidNumber = (num) => {

    if (num > 0 && num < 10) {
        return (num - Math.floor(num) === 0);
    }
    return !true;
};
