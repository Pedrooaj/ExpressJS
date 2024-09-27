// Exemplo Post com Get com req.body
const ReqbodyGet = (req, res) => {
    // // /* criar sessão */ req.session.usuario = { nome: "Pedro", logado: true };
    // apos a sessão criada ela vai ter um devido tempo para expirar.
    // console.log(req.session.usuario);
    //  so conseguem ser acessadas uma unica vez
    // req.flash("info", "Ola Mundo...");
    // req.flash("sucess", "Sucesso!!!");
    // req.flash("error", "Erro!!!");
    // console.log(req.flash('error'), req.flash("sucess"),  req.flash("info"));
    
    res.render("index", {
        titulo: "Este é o titulo",
        numeros: [1, 2, 3, 4, 5],
    });

    return
    
}

const ReqbodyPost = (req, res) => {
    console.log("Token CSRF: " + req.body._csrf);
    res.send(req.body);
    return;

}

export { ReqbodyGet, ReqbodyPost };