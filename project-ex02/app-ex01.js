/**
 * douzone-math 파일 모듈 테스트 
 * 하나의 프로젝트 안의 모듈간 export/import 할 때 방식
 */
var math = require('../douzone-math/index');

console.log(math.PI);
console.log(math.max(10,20,30,40,50));
console.log(math.min(10,20,30,40,50));