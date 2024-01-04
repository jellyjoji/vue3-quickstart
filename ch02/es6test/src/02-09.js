// 기본 function 함수 형태
const test1 = function(a,b) {
    return a+b;
}

// 화살표 함수 사용
const test2 = (a,b) =>{
    return a+b;
};

// 간결한 형태의 화살표 함수
const test3 = (a,b) => a+b;

// 모두 동일한 결과값
console.log(test1(3,4));
console.log(test2(3,4));
console.log(test3(3,4));
