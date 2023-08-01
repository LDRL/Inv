import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import conectarDB from './config/db.js';
import userRoutes from "./routes/userRoutes.js"

const app = express();
app.use(express.json());
const host = '0.0.0.0';

dotenv.config();

conectarDB();

//configurar cors

const whitelist = [process.env.FRONTEND_URL];
console.log("Este es un mensaje interno"+whitelist)
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin);
        if (whitelist.includes(origin)) {
            //puede consultar
            callback(null, true);
        } else {
            callback(new Error("Error de Cors"));
        }
    }
}

app.use(cors(corsOptions));

//Routing

app.use("/api/usuarios", userRoutes);

//use todos los empoints.
//req = datos enviados
//res = respuesta de la peticion

app.listen(PORT, host);

console.log(`Example app listening at http://localhost:${PORT}`);
