const http = require("http");

const server = http.createServer((req, res) => {
		if(req.method === "POST" && req.url === "/submit" ) {
			let body = "";
			req.on('data', chunk => {
				body += chunk.toString();
			});
			
			req.on('end', () => {
				console.log("body :>> ", body);
				res.writeHead(200, {
					'Content-type': 'text\plane',
				});
				res.end('Data has been sended succesfully');
			});
		}
//		res.statusCode = 200;
//		res.setHeader(content-type", "text/html");
//		res.write("<h1>Hello world!</h1>");
//		res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
		console.log(`"Server has beed launched on http://localhost:${PORT}`);
});