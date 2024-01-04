// 기본적인 promise 사용법 
const p = new Promise((resolve, reject) => {
    setTimeout(()=> {
        var num = Math.random();        //0~1사이의 난수 발생
        if (num >= 0.8) {
            // 잘못된 값은 reject() 호출
            reject("생성된 숫자가 0.8이상임 - " + num);
        }
        // 바른 값은 resolve() 호출
        resolve(num);
    }, 2000)
})

p.then((result)=> {
    console.log("처리 결과 : ", result)
})
.catch((error)=>{
    console.log("오류 : ", error)
})

// 가장 먼저 실행 
console.log("## Promise 객체 생성!");