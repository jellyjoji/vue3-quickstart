var obj = { result:0 };
obj.add = function(x,y) {
  function inner() {
    // function 안에 function 중첩함수
     this.result = x+y;
  }
  inner();
}
obj.add(3,4)

console.log(obj)        // { result: 0 }
console.log(result)     // 7

// 중첩 함수의 this 와 바깥쪽 함수 obj 는 다른 객체를 바인딩한다.                                                                                                                                                                                                                                                 
 