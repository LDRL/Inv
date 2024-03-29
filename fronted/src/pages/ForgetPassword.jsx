import { useState } from "react"
import { Link } from "react-router-dom"
import clientAxios from "../config/ClientAxios"
import Alert from "../components/Alert"
const ForgetPassword = () => {

    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if (email === '') {
            setAlert({
                msg: "El email es obligatorio",
                error: true
            });

            return
        }
        try {
            const {data} = await clientAxios.post(`/usuarios/forget-password`,{email})

            setAlert({
                msg: data.msg,
                error: false
            })
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alert

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl text-center capitalize">
                Recuperar Acceso
            </h1>
            {msg && <Alert alert={alert} />}
            <form
                onSubmit={handleSubmit}
                className="my-10 bg-white shadow rounded-lg p-10">
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="email"
                        placeholder="Email de registro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <input type="submit"
                    value="Enviar Instrucciones"
                    className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
                        hover:cursor-pointer hover:bg-sky-800 transition-colors"
                />
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                    to="/">
                    ¿Ya tienes una cuenta ? Inicia Sesión
                </Link>

                <Link
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                    to="/registrar">
                    ¿No tienes una cuenta ? Regístrate
                </Link>
            </nav>

        </>
    )
}

export default ForgetPassword
