// 기본값 할당
function addContact (name, mobile, home="없음", address="없음", email="없음"){
    var str = `name=${name}, mobile=${mobile}, home=${home},`+
    `address=${address}, email=${email}`;
    console.log(str);
}

// 가변 파라미터는 여러개의 파이미터 값을 배열로 받을수 있도록 한다.
addContact("홍길동","010-222-3331")
addContact("이몽룡","010-222-2331","02-3422-9000","서울시");