var obj = { result:0 };
obj.add = function(x,y) {
  function inner() {
    // this 는 obj 가 되었다. 
     this.result = x+y;
  }
  // .bind 메서드를 사용
  inner = inner.bind(this);
  inner()
}
obj.add(3,4)

console.log(obj)        // { result: 7 }