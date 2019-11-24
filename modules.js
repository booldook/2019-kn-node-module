/* global */
console.log(__dirname);
console.log(__filename);

const interval = setImmediate(() => {
	// console.log("hi");
});

console.time("측정");
for(var i=0; i<1000000000; i++) {

}
console.timeEnd("측정");
console.error("에러입니다.");

const obj = {
	name: "홍길동",
	summary: {
		age: 25
	}
}
console.dir(obj);

console.clear();


/* os */
const os = require('os');
// 운영체제 정보
console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.uptime());
console.log(os.hostname());
console.log(os.release());
console.clear();
// 경로
console.log(os.homedir());
console.log(os.tmpdir());
// cup정보
console.log(os.cpus());
console.log(os.cpus().length);
// 메모리 정보
console.log(os.freemem());
console.log(os.totalmem());
console.clear();


/* path */
const path = require('path');
const fileStr = __filename;
console.log("dirname: ", path.dirname(fileStr));
console.log("extname: ", path.extname(fileStr));
console.log("basename: ", path.basename(fileStr));
console.log("parse: ", path.parse(fileStr));
const parse = path.parse(fileStr);
let str = path.format(parse);
console.log(str);

console.log(path.normalize("C:\\Users\\hi\\\Documents\\주말반\\\\07.node"));
str = path.join(__dirname, "../../../");
console.log(str);


/* url */
