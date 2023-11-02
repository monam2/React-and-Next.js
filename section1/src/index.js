// const moduleDate = require("./math");
// const { add, sub } = require("./math");
// 위의 두개는 CJS모듈 시스템

import  mul, {add, sub} from "./math.js"

// import mul from "./math.js"
//ESM은 import {..} form  "경로/파일명.js"

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(10, 20));

// console.log(moduleDate.add(1,2));
// console.log(moduleDate.sub(1,2));