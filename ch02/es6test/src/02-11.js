var obj = { result: 0 };
obj.add = function(x,y) {  
   // 메서드를 다른 객체의 형태로 호출하면 this 가 달라진다. 메서드가 호출될때 연결되기 때문이다. 
   this.result = x+y;
}
var add2 = obj.add;
console.log(add2 === obj.add)      //true, 동일한 함수
add2(3,4)       //전역변수 result에 7이 할당됨.
console.log(obj);       //{ result: 0 }
console.log(result);    //7
