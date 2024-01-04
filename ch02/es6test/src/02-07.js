// 객체의 구조분해 할당
let arr = [10,20,30,40];
let [a1,a2,a3] = arr;
console.log(a1,a2,a3); // 10 20 30

let p1 = { name:"홍길동", age:20, gender:"M"};

// 객체의 속성과 할당하려는 변수가 동일할때는 변수명 생략 가능 gender
let {name:n, age:a, gender} = p1;
console.log(n,a,gender); // 홍길동 20 M