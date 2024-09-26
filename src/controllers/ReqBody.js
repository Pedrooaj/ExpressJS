// Exemplo Post com Get com req.body
const ReqbodyGet = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome" />
        <button>Enviar</button>
        </form>    
        `)
}

const ReqbodyPost = (req, res) => {
    console.log(req.body);
    res.send(`Recebi seu valor: ${req.body.nome}`);
    
}

export { ReqbodyGet, ReqbodyPost };