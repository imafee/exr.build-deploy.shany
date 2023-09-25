const http = require("node:http");
const fs = require("node:fs");

// 01.常规写法
// const html = fs.readFileSync("./index.html");
// const server = http.createServer((req, res) => res.end(html));

// 02.流读写的优化写法
const server = http.createServer((req, res) => {
  // 此处需要手动处理下 Content-Length
  fs.createReadStream("./index.html").pipe(res);
});

server.listen(3000, () => {
  console.log("Listening 3000");
});
