export const ReqQuery = (req, res) => {
    // Exemplo de requisição com req.query
    // Ex: localhost:3000/consulta/?cpf=123456
    // ( req ) Request --> Dados enviados pelo cliente
    let cpf = req.query['cpf'];
    console.log(req.query);
    // ( res ) Response --> Dados enviados para o cliente
    res.send("Retorno consula: CPF = " + cpf);
    
}