import express from 'express';
import dotenv from "dotenv";
import conectarDB from './config/db.js';
import userRoutes from "./routes/userRoutes.js"

const app = express();
app.use(express.json());
const host = '0.0.0.0';

dotenv.config();

conectarDB();

const PORT = process.env.PORT || 3000;

//Routing
console.log("mensaje");

app.use("/api/usuarios", userRoutes);

//use todos los empoints.
//req = datos enviados
//res = respuesta de la peticion

app.listen(PORT,host);

console.log(`Example app listening at http://localhost:${PORT}`);
