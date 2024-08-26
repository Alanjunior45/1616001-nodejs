import http from 'http';

const server = http.createServer((req, res) => {
  console.log(req.method)

  // if(req.url === '/form') {
  //   res.setHeader('Content-Type', 'text/html');
  //   const form = '<form action="http://localhost:3000/cadastro" method="post">' +
  //     '<input type="text" name="cidade" placehouder="Cidade">' +
  //     '<button type="submit">ENVIAR</button></form>';
  //   res.end(form);
  //   return;
  // }


  if (req.url === '/clientes') {
    res.end("Pagina de clientes")
    return;
  }

  if (req.url === '/contato') {
    res.end("Pagina de contato");
    return;
  }
  
  if(req.url === '/cadastro' && req.method === 'POST') {
    req.end("Cadastro efetuado com sucesso!");
    return;
  }

  res.end("rodando..........");

});

server.listen(3000, 'localhost', () => {
  Console.log('Servidor operando...');
});