const http = require('http');

const server = http.createServer((req, res)=> {
    console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.
    //res.write('MERHABA');  tarayıcıda MERHABA çıktısını göreceğiz.

    const url = req.url

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" }); // status 200 döndürdük.
        res.write("<h2>WELCOME TO THE INDEX PAGE</h2>");
      } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>WELCOME TO THE ABOUT MYSELF PAGE</h2>");
      } else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>WELCOME TO THE CONTACT PAGE<h2>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 SAYFA BULUNAMADI</h1>");
      }
    res.end(); // Bitireceğiz ki response bitsin ve ekranda görebilelim responsları
  });

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});