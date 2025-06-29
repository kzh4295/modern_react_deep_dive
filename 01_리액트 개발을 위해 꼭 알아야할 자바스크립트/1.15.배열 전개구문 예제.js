const arr1 = ['a', 'b'];
const arr2 = [...arr1, 'c', 'd', 'e'];

// 바벨 트랜스파일링
var arr1 = ['a', 'b'];
var arr2 = [].concat(arr1, ['c', 'd', 'e']);


