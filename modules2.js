/* crypto */
const crypto = require('crypto');

let sha512 = crypto.createHash('sha512').update("1234").digest("base64");
console.log(sha512);
let sha514 = crypto.createHash('sha512').update("1234").digest("base64");
console.log(sha514);
let sha513 = crypto.createHash('sha512').update("4321").digest("base64");
console.log(sha513);


crypto.randomBytes(64, (err, buf) => {
	const salt = buf.toString('base64');
	console.log('salt: ', salt);
	crypto.pbkdf2('1234', salt, 35085, 64, 'sha512', (err, key) => {
		console.log(key.toString('base64'));
	});
});

console.time('시작');
crypto.pbkdf2('1234', 'my-salt', 350855, 64, 'sha512', (err, key) => {
	console.log(key.toString('base64'));
	console.timeEnd('시작');
});
console.clear();

/* util */
const util = require('util');
const randomBytesPro = util.promisify(crypto.randomBytes);
const pbkdf2Pro = util.promisify(crypto.pbkdf2);

randomBytesPro(64)
.then((buf) => {
	const salt = buf.toString('base64');
	console.log('salt: ', salt);
	return pbkdf2Pro('1234', salt, 35085, 64, 'sha512');
})
.then((key) => {
	console.log(key.toString('base64'));
})
.catch((err) => {
	console.error(err);
});


