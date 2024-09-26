export const MeuMiddleware = (req, res, next) => {
    console.log("Você passou pelo middleware global");
    next();
}

