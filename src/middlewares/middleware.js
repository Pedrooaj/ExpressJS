// Middleware serve para acessarmos itens no ato de uma requisição HTTP 
// E também para interceptar requisições HTTP.

export const MeuMiddleware = (req, res, next) => {
    res.locals.variavelLocal = "Este é o valor da variavel.";

    console.log("Você passou pelo middleware global");
    next();
}



export const checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        res.render('404');
      }
}

export const csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}