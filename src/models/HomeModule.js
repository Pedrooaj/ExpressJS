import mongoose from "mongoose";
// Model serve para modelar o formato dos dados que serão inseridos no banco de dados MongoDB...
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
})

// O Model vai diremente para as coleções do banco de dados MongoDB
const HomeModel = mongoose.model('home', HomeSchema);

// Model irá ser exportado para ser utilizado em outros arquivos do projeto
// Para efetuar operações no banco de dados MongoDB
export default HomeModel;