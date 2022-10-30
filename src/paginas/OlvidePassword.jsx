import { Link } from 'react-router-dom'


const OlvidePassword = () => {
  return (

    <>
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">
            Recupera Tu Acceso</h1>
        </div>

        <div>

          <form
            className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white "
          // onSubmit={handleSubmit}
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
            <input
              type="submit"
              value="Enviar Instruciones"
              className="bg-indigo-700 w-full py-3 px-10
                rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                 hover:bg-indigo-800 md:w-auto"
            />
          </form>

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link to="/registrar"
              className="block text-center text-gray-500 hover:cursor-pointer hover:text-indigo-800">
              ¿No tienes una cuenta Registrate? Registrate</Link>

            <Link to="/"
              className="block text-center text-gray-500 hover:cursor-pointer hover:text-indigo-800">
              ¿Ya tienes una cuenta Registrate? Inicia Sesión</Link>
          </nav>
        </div>

    </>


  )
}

export default OlvidePassword