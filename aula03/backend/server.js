import http from 'http';

const server = http.createServer((req, res) => {

//const total = 100 + 2 + 3 + 3 / 25 * 2    
//res.end(`O total foi: ${total}`)

// Realize a soma de dois numeros
// Se o resultado da soma for PAR
// Mostre o NUMERO com a mensagem PAR ao lado
// Caso contrario informe o NUMERO e a mensagem IMPAR ao lado
let n1=10;
let n2=5;
let result = n1 + n2
//console.log(result)

res.setHeader('Content-Type', 'text/html');

if(result % 2 === 0)
{
    res.end(`Numero ${result} eh par,`);
}  
else
{
    res.end(`Numero ${result} eh <span style="color:red">impar</span>,`);
}  
})

server.listen(3000, 'localhost')