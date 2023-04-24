import User from "../models/User.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";

const users = (req, res) => {
    res.send("Desde api/usuarios");
};

const createdUser = async (req, res) => {
    // Evitar registros duplicados

    const { email } = req.body;
    const existeUsuario = await User.findOne({ email });

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({ msg: error.message });
    }
    try {
        const user = new User(req.body);
        user.token = generarId();
        const userAlmacenado = await user.save();
        res.json(userAlmacenado);

    } catch (error) {
        console.log(error);
    }
};

const authentication = async (req, res) => {
    const { email, password } = req.body;

    // Comprobar si el usuario existe
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });
    }

    //Comprobar si el usuario esta confirmado
    if (!user.confirmed) {
        const error = new Error("Tu Cuenta no ha sido confirmado");
        return res.status(403).json({ msg: error.message });
    }

    // Comprobar su password
    if (await user.comprobarPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generarJWT(user._id),
        });
    } else {
        const error = new Error("El password es Incorrecto");
        return res.status(403).json({ msg: error.message });
    }
};

const confirmed = async (req, res) => {
    const { token } = req.params;
    const userConfirmed = await User.findOne({ token });

    if (!userConfirmed) {
        const error = new Error("Token no valido");
        return res.status(403).json({ msg: error.message });
    }

    try {
        userConfirmed.confirmed = true;
        userConfirmed.token = "";
        await userConfirmed.save();
        res.json({ msg: "Usuario Confirmado Correctamente" });

    } catch (error) {
        console.log(error);

    }
};

const forgetPassword = async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });
    }

    try {
        user.token = generarId();
        await user.save();
        res.json({ msg: "Hemos enviado un email" });
    } catch (error) {
        console.log(user);
    }

};

const checkToken = async (req, res) => {
    const {token } = req.params;

    const validToken = await User.findOne({token});

    if(validToken){
       res.json({msg: "Token valido y el usuario existe"});
    }else{
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    }
};

const newPassword = async (req, res) => {
    const {token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({token});

    if(user){
       user.password = password;
       user.token = "";
       user.save();
       res.json({msg: 'Password Modificado con exito'});
    }else{
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    }

};

const perfil = async (req, res) =>{
    const { user } = req;
    res.json(user);
};

export {
    users, createdUser, authentication, 
    confirmed, forgetPassword, checkToken,
    newPassword, perfil
};