var obj = { result: 0 };
obj.add = function(x,y) {  
   // 일반 함수에서의 this 는 obj 를 연결
   this.result = x+y;
}
obj.add(3,4)
console.log(obj)        // { result: 7 }