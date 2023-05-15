/*인자로 받은 정수의 모든 양의 약수(約數, divisor) 배열을 작은 순서대로 반환하는 함수 getDivisors를 구현하 여라.*/
// 정수 x 의 약수는 √x 까지만 탐색하여도 모두 구할 수 있음을 이용하고, 배열의 sort 메서드를 이용하여라.
// 인자로 받은 값이 유효한 값인지 확인할 필요는 없다.
const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (i * i === num) {
            divisors.push(i);
        }
        else if (num % i === 0) {
            divisors.push(i, num / i);
        }
    }
    return divisors.sort((first, second) => first - second);
};