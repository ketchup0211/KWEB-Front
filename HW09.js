/*ellipse 객체에 타원의 넓이, 둘레의 길이, 이심률을 구하여 반환하는 함수 getArea, getPerimeter, getEccentricity를 구현하여라.*/
//타원의 width를 w, height를 h 라고 하였을 때(w ≥ h), 각 값을 구하는 식은 다음과 같다.
//Exercise 3.3
const ellipse = {
    width: 10,
    height: 5,
    getArea() {
        return Math.PI * this.width * this.height;
    },
    getPerimeter() {
        return 2 * Math.PI * Math.sqrt((this.height ** 2 + this.width ** 2) / 2);
    },
    getEccentricity() {
        return Math.sqrt(1 - (this.height / this.width) ** 2);
    },
};