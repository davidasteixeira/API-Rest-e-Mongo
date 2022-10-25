import mongoose from "mongoose";

//Criar banco no atlas
mongoose.connect(``);

let db = mongoose.connection ;

export default db;