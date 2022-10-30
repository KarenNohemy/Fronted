import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  
  const [correoElectronico, setCorreoElectronico] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([correoElectronico, password].includes('')) {
        console.log('Todos los campos son obligatorios')
        return;
    }

    try {
        const { data } = await clienteAxios.post('http://localhost:6000/login/login', { 
          "correoElectronico": correoElectronico,
          "contrasenia": password
        });
        localStorage.setItem('token',data.token)
        setAuth(data)
        navigate('/admin')
    } catch (error) {
      console.log(error)
    }

}
  
  return (

    <>

      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Inicia Sesion</h1>
      </div>

        <div>

          <form
            className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white "
          onSubmit={handleSubmit}
          >
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Correo Electrónico
              </label>
              <input
                type="text"
                placeholder="Usuario@gmail.com"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              // value={email}
              // onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Contraseña
              </label>
              <input
                type="Paswoord"
                placeholder="Tu contraseña"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              // value={password}
              // onChange={e => setPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Iniciar Sesion"
              className="bg-indigo-700 w-full py-3 px-10
                rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                 hover:bg-indigo-800 md:w-auto"
            />
          </form>

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link to="/registrar"
              className="block text-center text-gray-500 hover:cursor-pointer hover:text-indigo-800">
              ¿No tienes una cuenta Registrate?Registrate</Link>

              <Link to="/olvide-password"
              className="block text-center text-gray-500 hover:cursor-pointer hover:text-indigo-800">
              ¿Olvidaste tu cotraseña?</Link>
          </nav>
        </div>

    </>


  )
}

export default Login
