const http = require('http');
const cluster = require('cluster');

let cpus = require('os').cpus();
let cpuCnt = cpus.length;

if(cluster.isMaster) {
	for(let i=0; i<cpuCnt; i++) {
		cluster.fork();	// worker를 만든다.
	}
	cluster.on('exit', (worker, code, signal) => {
		console.log(`${worker.process.pid}번 워커가 사망하였습니다.`);
		cluster.fork();
	});
}
else {
	// worker가 대기
	http.createServer((req, res) => {
		console.log(process.pid + "구동");
		res.end("<h1>서버응답</h1>");
	}).listen(3001);
	console.log(process.pid + "번 서버가 실행되었습니다.");
}
