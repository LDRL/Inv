import express from "express";
import {
    users, createdUser, authentication, confirmed,
    forgetPassword, checkToken,
    newPassword, perfil
} from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();


//Creacion, registro y confirmacion de Usuarios
router.get('/', users);

router.post('/', createdUser); //Crea un nuevo Usuario
router.post('/login', authentication);
router.get('/confirmed/:token', confirmed);
router.post('/forget-password', forgetPassword);
router.route("/forget-password/:token").get(checkToken).post(newPassword);

//
router.get("/perfil", checkAuth, perfil);

router.put('/', (req, res) => {
    res.send("Desde put api/usuarios");
});

router.delete('/', (req, res) => {
    res.send("Desde delete api/usuarios");
});


export default router; 