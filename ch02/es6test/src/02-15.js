var obj = { result:0 };
obj.add = function(x,y) {
  const inner = () => {
    // 일반함수에서의 inner = inner.bind(this); 를 아래와 같이 화살표 함수로 간결하게 표현
    // 일반함수에서는 바깥을 this 로 받는다면 화살표 함수는 자신의 유효범위를 this 로 받기 때문에 this 는 inner 이 되었다. 
     this.result = x+y;
  }
  inner()
}
obj.add(3,4)

console.log(obj)        // { result: 7 }