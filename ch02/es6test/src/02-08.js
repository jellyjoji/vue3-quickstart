// addContact1
// 가장 바람직
// 가독성이 좋으면서 간편하게 기본값을 부여
// 파라미터 기본값 지정 email="이메일없음"
function addContact1({name,phone,email="이메일없음",age=0}){
    console.log(name,phone,email,age);
}
// 함수를 호출할때 전달한 객체를 구조분해 할당으로 받아냄
addContact1({name:"이몽룡",phone:"010-3434-8989"})

// addContact2
// 기본값 코드 직접작성해야하는 번거로움
function addContact2(contact){
    if(!contact.email) contact.email = "이메일없음";
    if(!contact.age) contact.age = 0;
    let {name,phone,email,age}=contact;
    console.log(name,phone,email,age);
}
addContact2({name:"이몽룡",phone:"020-3434-8989"})

// addContact3
// 가독성이 좋지않음
function addContact3(name,phone,email="이메일없음",age=0) {
    console.log(name,phone,email,age);
}
addContact3("이몽룡","010-3434-8989")