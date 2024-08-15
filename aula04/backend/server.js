import http from 'http';

const server = http.createServer((req, res) => {
   
  if(req.url === '/clientes') {
    res.end("Pagina de clientes")
    return;
   }

   if(req.url === '/contatos') {
      res.end("Pagina de contatos");
      return;
   }
   if(req.url === '/cadastros') {
    res.end("Pagina de contatos");
    return;
 }
  res.end("rodando..........");

});

server.listen(3000, 'localhost');