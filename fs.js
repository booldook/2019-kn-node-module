const fs = require('fs');

let txt = "아버지를 아버지라... 용왕이 나의 간을....";
fs.writeFile("./reademe.txt", txt, (err) => {
	if(err) throw err;
});

fs.readFile("./reademe.txt", (err, res) => {
	console.log(res.toString());
});