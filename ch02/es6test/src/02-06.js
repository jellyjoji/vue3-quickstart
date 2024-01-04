// ...favoritFoods 는 가변 파라미터이다. 
function foodReport(name,age,...favoritFoods) {
    console.log(name+","+age);
    console.log(favoritFoods);
}

// name 과 age 를 제외한 나머지 안자값들은 ...favoritFoods 에 전달된다. 
foodReport("이몽룡",20,"짜장면","냉면","불고기");
foodReport("홍길동",16,"초밥");