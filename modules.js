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




/* os */
const os = require('os');
// 운영체제 정보
console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.uptime());
console.log(os.hostname());
console.log(os.release());

// 경로
console.log(os.homedir());
console.log(os.tmpdir());
// cup정보
console.log(os.cpus());
console.log(os.cpus().length);
// 메모리 정보
console.log(os.freemem());
console.log(os.totalmem());



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
const url = require('url');
const querystring = require('querystring');
const myUrl = new URL('https://nodejs.org/dist/latest-v12.x/docs/api/url.html?aa=bbb&name=booldook&age=25#url_url_pathname');

console.log(myUrl);
console.log(url.format(myUrl));

const urlStr = 'https://nodejs.org/dist/latest-v12.x/docs/api/url.html?aa=bbb&name=booldook&age=25#url_url_pathname';
const parseUrl = url.parse(urlStr);
console.log(parseUrl);
console.log(url.format(parseUrl));

console.log(myUrl.searchParams);
console.log(myUrl.searchParams.keys());
console.log(myUrl.searchParams.values());

myUrl.searchParams.append("test", "0000");
myUrl.searchParams.append("test2","1111");
console.log(myUrl.searchParams);

myUrl.searchParams.delete("test2");
console.log(myUrl.searchParams);
console.log(myUrl.searchParams.toString());

console.log(querystring.parse(parseUrl.query));
console.clear();


