import{createServer} from 'node:http';

const server = createServer((req, res) =>{
    res.writeHead(500, {'Content-Type': 'text/html'});
    res.end('Server is running');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is listening');
});

//Arrow Functions
function handleRequest(){}
const handleRequest = () => {}