const crypto = require('crypto');
const util = require('util');
const randomBytesPro = util.promisify(crypto.randomBytes);
const pbkdf2Pro = util.promisify(crypto.pbkdf2);

module.exports = async (password) => {
	let buf = await randomBytesPro(64);
	let salt = buf.toString('base64');
	let key = await pbkdf2Pro(password, salt, 35085, 64, 'sha512');
	console.log(key.toString('base64'));
	return {salt, key};
}