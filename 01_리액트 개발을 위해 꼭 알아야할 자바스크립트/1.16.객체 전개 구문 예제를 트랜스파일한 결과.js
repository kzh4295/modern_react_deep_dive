const obj1 = {
    a:1,
    b:2,
}

const obj2 = {
    c:3,
    d:4
}

const newObj = {...obj1, ...obj2};

// 위의 코드를 바벨로 객체  트랜스 파일할 경우, 배열 트랜스파일 보다 많은 절차가 필요하니, 전개 구문 사용시 주의 필요
function ownKeys(object, enumerableOnly){
    var keys = Object.keys(object);
}