import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import Alert from '../../components/Alert'
import clientAxios from '../../config/ClientAxios'
import useAuth from '../../hooks/useAuth'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState({})

    const {setAuth} = useAuth()
    const navigate = useNavigate()


    const handleSubmit = async e => {
        e.preventDefault();

        if([email, password].includes('')){
            setAlert({
                msg:'Todos los campos son obligatorios',
                error: true
            });
            return
        }

        try {
            const{data} = await clientAxios.post('/usuarios/login',{email,password})
            setAlert({})
            localStorage.setItem('token',data.token)
            setAuth(data)
            navigate('/home')
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const {msg} = alert

    return (
        <>
            <div className='screen'>
                <div className='screen__content'>
                    <h1 className='form-title'>
                        Inicia sesión
                    </h1>


                    {msg && <Alert alert={alert} />}

                    <form
                        className="form-signin"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-signin__content">
                            <label className="form-signin__text"
                                htmlFor="username">
                                User Name
                            </label>
                            <input id="username" type="text"
                                placeholder="Usuario de registro"
                                className="inp"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-signin__content">
                            <label className="form-signin__text"
                                htmlFor="password">
                                Contraseña
                            </label>
                            <input id="password" type="password"
                                placeholder="Contraseña de registro"
                                className="inp"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <input type="submit"
                            value="Iniciar Sesión"
                            className="button button__submit"
                        />
                    </form>



                    <nav className="nav">
                        <Link
                            className="nav__link
                        block text-center my-5 text-slate-500 uppercase text-sm"
                            to="registrar">
                            ¿No tienes una cuenta ? Regístrate
                        </Link>

                        <Link
                            className="nav__link"
                            to="olvide-password">
                            Olvide mi contraseña
                        </Link>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Login
