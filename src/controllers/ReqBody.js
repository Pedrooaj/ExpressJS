// Exemplo Post com Get com req.body
const ReqbodyGet = (req, res) => {
    // criar sessão req.session.usuario = { nome: "Pedro", logado: true };
    // apos a sessão criada ela vai ter um devido tempo para expirar.
    console.log(req.session.usuario);
    
    
    // req.flash("info", "Ola Mundo...");
    // req.flash("sucess", "Sucesso!!!");
    // req.flash("error", "Erro!!!");

    console.log(req.flash('error'), req.flash("sucess"));
    
    
    

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