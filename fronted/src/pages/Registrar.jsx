import { useState } from "react"
import { Link } from "react-router-dom"
import Alert from "../components/Alert";
import clientAxios from "../config/ClientAxios";
const Registrar = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [alert, setAlert] = useState({});

	const handleSubmit = async e => {
		e.preventDefault();

		if ([name, email, password, repeatPassword].includes('')) {
			setAlert({
				msg: 'todos los campos son obligatorios',
				error: true
			})

			return
		}

		if(password !== repeatPassword){
			setAlert({
				msg: 'Las contraseñas no son iguales',
				error: true
			})

			return
		}

		if(password.length < 6){
			setAlert({
				msg: 'La contraseña es muy corto, agrega minimo 6 caracteres',
				error: true
			})

			return
		}

		setAlert({})
		// Crear el usuario en la Api

		try {
			const {data} = await clientAxios.post(`/usuarios`,
			{name,email, password})

			setAlert({
				msg: data.msg,
				error: false
			})

			setName('')
			setEmail('')
			setPassword('')
			setRepeatPassword('')
			
		} catch (error) {
			setAlert({
				msg: error.response.data.msg,
				error: true
			})
		}

		
	}

	const { msg } = alert;

	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl text-center capitalize">
				Crear cuenta
			</h1>

			{ msg && <Alert alert={alert} />}

			<form
				className="my-10 bg-white shadow rounded-lg p-10"
				onSubmit={handleSubmit}
			>
				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold"
						htmlFor="name">
						Nombre
					</label>
					<input id="name" type="text"
						placeholder="Nombre de registro"
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>

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

				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold"
						htmlFor="password">
						Contraseña
					</label>
					<input id="password" type="password"
						placeholder="Contraseña de registro"
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>

				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold"
						htmlFor="password2">
						Repetir Contraseña
					</label>
					<input id="password2" type="password"
						placeholder="Repetir Contraseña"
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						value={repeatPassword}
						onChange={e => setRepeatPassword(e.target.value)}
					/>
				</div>

				<input type="submit"
					value="Crear cuenta"
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
					to="olvide-password">
					Olvide mi contraseña
				</Link>
			</nav>

		</>
	)
}

export default Registrar
