import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import clientAxios from "../config/ClientAxios"
import Alert from '../components/Alert'

const NewPassword = () => {

	const [password, setPassword] = useState('')
	const [alert, setAlert] = useState({})
	const [verifiedToken, setVerifiedToken] = useState(false)
	const [changedPassword, setChangedPassword] = useState(false)
	const params = useParams()
	const { token } = params

	useEffect(() => {
		const verifyToken = async () => {
			try {
				await clientAxios(`/usuarios/forget-password/${token}`)
				setVerifiedToken(true)
			} catch (error) {
				setAlert({
					msg: error.response.data.msg,
					error: true
				})
			}
		}
		verifyToken()
	}, [])

	const handleSubmit = async e => {
		e.preventDefault();

		if (password.length < 6) {
			setAlert({
				msg: 'La contraseña debe ser minimo de 6 caracteres',
				error: true
			})
			return
		}

		try {
			const url = `/usuarios/forget-password/${token}`
			const { data } = await clientAxios.post(url, { password })
			setAlert({
				msg: data.msg,
				error: false
			})
			setChangedPassword(true)
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
				Restablecer Contraseña
			</h1>

			{msg && <Alert alert={alert} />}

			{verifiedToken && (
				<form className="my-10 bg-white shadow rounded-lg p-10"
					onSubmit={handleSubmit}
				>

					<div className="my-5">
						<label className="uppercase text-gray-600 block text-xl font-bold"
							htmlFor="password">
							Nueva Contraseña
						</label>
						<input id="password" type="password"
							placeholder="Nueva Contraseña"
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
						/>
					</div>

					<input type="submit"
						value="Guardar nueva Contraseña"
						className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
                        hover:cursor-pointer hover:bg-sky-800 transition-colors"
					/>
				</form>
			)}

			{changedPassword && (
				<Link
					className="block text-center my-5 text-slate-500 uppercase text-sm"
					to="/">
					¿Ya tienes una cuenta ? Inicia Sesión
				</Link>
			)}


		</>
	)
}

export default NewPassword
