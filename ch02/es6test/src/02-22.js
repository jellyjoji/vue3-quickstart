var p = new Promise((resolve, reject)=> {
    resolve("first!")
})

// promise chain
p.then((msg)=> {
    console.log(msg);
    throw new Error("## 에러!!")
    return "second";
})
.then((msg)=>{
    console.log(msg);
    return "third";
})
.then((msg)=>{
    console.log(msg);
})

// promise chain 에서 예외 처리는 catch() 로 처리한다. 
.catch((error)=> {
    console.log("오류 발생 ==>  " + error)
})