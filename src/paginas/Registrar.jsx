import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Registrar = () => {

  const [nombre, setNombre] = useState('')
  const [correoElectronico, setCorreoElectronico] = useState('')
  const [password, setPassword] = useState('')
  const [telefono, setTelefono] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [municipio, setMunicipio] = useState('')

  const enviarFormulario = async e => {
    e.preventDefault();

    if ([nombre, correoElectronico, telefono, password].includes('')) {
      console.log('Correo, nombre, telefono y contraseña son obligatorios')
    }

    try {
      const respuesta = await axios.post('http://localhost:6000/personas/guardarPersona', {
        "nombreCompleto" : nombre,
        "correoElectronico" : correoElectronico,
        "telefono" : telefono,
        "calificacion" : null,
        "departamento" : "Francisco Morazan",
        "municipio" : "Distrito Central",
        "rol" : "cliente",
        "estado" : null,
        "contrasenia" : password,
        "token" : null
      })
    } catch (error) {
      console.log(error)
      
    }

    

  }

  


  //1) Definir Las Variables Correspondintes
  const opt_1 = new Array("Municipio", "La Ceiba", "El Porvenir", "Esparta", "Jutiapa", "La Masica", "Tela", "San Franciso", "Arizona");
  const opt_2 = new Array("Municipio", "Trujillo", "Balfate", "Iriona", "Limón", "Sabá", "Santa Fe", "Santa Rosa de Aguán", "Sonaguera", "Tocoa", "Bonito Oriental");
  const opt_3 = new Array("Municipio", "Comayagua", "Ajuterique", "El Rosario", "Esquías", "Humuya", "La Libertad", "Lamaní", "La Trinidad", "Lejamaní", "Meámbar", "Minas de Oro", "Ojo de Agua", "San Jerónimo", "San José de Comayagua", "San José del Potrero", "San Luis", "San Sebastián", "Siguatepeque", "Villa de San Antonio", "Lajas", "Taulabe");
  const opt_4 = new Array("Municipio", "Santa Rosa de Copán", "Cabañas", "Concepción", "Copán Ruinas", "Corquín", "Cucuyagua", "Dolores", "Dulce Nombre", "El Paraiso", "Florida", "La Jigua", "La Unión", "Nueva Arcadia", "San Agustín", "San Antonio", "San Jerónimo", "San José", "San Juan de Opoa", "San Nicolás", "San Pedro", "Santa Rita", "Trinidad de Copán", "Veracruz");
  const opt_5 = new Array("Municipio", "San Pedro Sula", "Choloma", "Omoa", "Pimienta", "Potrerillos", "Puerto Cortés", "San Antonio de Cortés", "San Francisco de Yojoa", "San Manuel", "Santa Cruz de Yojoa", "Villanueva", "La Lima");
  const opt_6 = new Array("Municipio", "Choluteca", "Apacilagua", "Concepción de María", "Duyure", "El Corpus", "El Triunfo", "Marcovia", "Morolica", "Namasigue", "Orocuina", "Pespire", "San Antonio de Flores", "San Isidro", "San José", "San Marcos de Colón", "Santa Ana de Yusguare");
  const opt_7 = new Array("Municipio", "Yuscarán", "Alauca", "Danlí", "El Paraiso", "Guinope", "Jacaleapa", "Liure", "Morocelí", "Oropolí", "Potrerillos", "San Antonio de Flores", "San Lucas", "San Matías", "Soledad", "Teupasenti", "Texiguat", "Vado Ancho", "Yauyupe", "Trojes");
  const opt_8 = new Array("Municipio", "Tegucigalpa", "Alubarén", "Cedros", "Curarén", "El Porvenir", "Guaimaca", "La Libertad", "La Venta", "Lepaterique", "Maraita", "Marale", "Nueva Armenia", "Ojojona", "Orica", "Reitoca", "Sabanagrande", "San Antonio de Oriente", "Sam Buenaventura", "San Ignacio", "San Juan de Flores", "San Miguelito", "Santa Ana", "Santa Lucía", "Talanga", "Tatumbla", "Valle de Ángeles", "Villa de San Francisco", "Vallecillo");
  const opt_9 = new Array("Municipio", "Puerto Lempira", "Brus Laguna", "Ahuas", "Juan Francisco Bulnes", "Villeda Morales", "Wampusirpi");
  const opt_10 = new Array("Municipio", "La Esperanza", "Camasca", "Colomoncagua", "Concepción", "Dolores", "Intibucá", "Jesús de Otoro", "Magdalena", "Masaguara", "San Antonio", "San Isidro", "San Juan del Caite", "San Marcos de La Sierra", "San Miguelito", "Santa Lucía", "Yamaranguila", "San Francisco de Opalaca");
  const opt_11 = new Array("Municipio", "Roatán", "Guanaja", "José Santos Guardiola", "Utila");
  const opt_12 = new Array("Municipio", "La Paz", "Aguanqueterique", "Cabañas", "Cane", "Chinacla", "Guajiquiro", "Lauterique", "Marcala", "Mercedes de Oriente", "Opatoro", "San Antonio del Norte", "San José", "San Juan", "San Pedro de Tutule", "Santa Ana", "Santa Elena", "Santa María", "Santiago Puringla", "Yarula");
  const opt_13 = new Array("Municipio", "Gracias", "Belén", "Candelaria", "Cololaca", "Erandique", "Gualcinse", "Guarita", "La Campa", "La Iguala", "Las Flores", "La Unión", "La Virtud", "Lepaera", "Mapulaca", "Piraera", "San Andrés", "San Francisco", "San Juan Guarita", "San Manuel Colohete", "San Rafael", "San Sebastián", "Santa Cruz", "Talgua", "Tambla", "Tomalá", "Valladolid", "Virginia", "San Marcos de Caiquín");
  const opt_14 = new Array("Municipio", "Nueva Ocotepeque", "Belén Gualcho", "Concepción", "Dolores Merendón", "Fraternidad", "La Encarnación", "La Labor", "Lucerna", "Mercedes", "San Fernando", "San Francisco del Valle", "San Jorge", "San Marcos", "Santa Fe", "Sensenti", "Sinuapa");
  const opt_15 = new Array("Municipio", "Juticalpa", "Campamento", "Catacamas", "Concordia", "Dulce Nombre de Culmí", "El Rosario", "Esquipulas del Norte", "Gualaco", "Guarizama", "Guata", "Guayape", "Jano", "La Unión", "Mangulile", "Manto", "Salamá", "San Esteban", "San Francisco de Becerra", "San Francisco de La Paz", "Santa María del Real", "Silca", "Yocón", "Patuca");
  const opt_16 = new Array("Municipio", "Santa Bárbara", "Arada", "Atima", "Azacualpa", "Ceguaca", "Colinas", "Concepción del Norte", "Concepción del Sur", "Chinda", "El Níspero", "Gualala", "Ilama", "Macuelizo", "Naranjito", "Nueva Celilac", "Petoa", "Protección", "Quimistán", "San Francisco de Ojuera", "San Luis", "San Marcos", "San Nicolás", "San Pedro Centenario", "Trinidad", "Las Vegas", "Nueva Frontera");
  const opt_17 = new Array("Municipio", "Nacaome", "Alianza", "Amapala", "Aramecina", "Caridad", "Goascorán", "Langue", "San Francisco de Coray", "San Lorenzo");
  const opt_18 = new Array("Municipio", "Yoro", "Arenal", "El Negrito", "El Progreso", "Jocón", "Morazán", "Olanchito", "Santa Rita", "Sulaco", "Victoria", "Yorito");

  // 2) crear una funcion que permita ejecutar el cambio dinamico

  function cambia() {
    let cosa;
    //Se toma el vamor de la "cosa seleccionada"
    cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;
    //se chequea si la "cosa" esta definida
    if (cosa != 0) {
      //selecionamos las cosas Correctas
      mis_opts = eval("opt_" + cosa);
      //se calcula el numero de cosas
      num_opts = mis_opts.length;
      //marco el numero de opt en el select
      document.formulario1.opt.length = num_opts;
      //para cada opt del array, la pongo en el select
      for (i = 0; i < num_opts; i++) {
        document.formulario1.opt.options[i].value = mis_opts[i];
        document.formulario1.opt.options[i].text = mis_opts[i];
      }
    } else {
      //si no habia ninguna opt seleccionada, elimino las cosas del select
      document.formulario1.opt.length = 1;
      //ponemos un guion en la unica opt que he dejado
      document.formulario1.opt.options[0].value = "-";
      document.formulario1.opt.options[0].text = "-";
    }
    //hacer un reset de las opts
    document.formulario1.opt.options[0].selected = true;
  }


  return (

    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea Tu Cuenta {""}</h1>
      </div>




      <form className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white "
        onSubmit={enviarFormulario}>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            placeholder="Tu nombre"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Correo Electrónico
          </label>
          <input
            type="text"
            placeholder="Correo de Registro"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            value={correoElectronico}
            onChange={e => setCorreoElectronico(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label
            className="uppercase text-gray-600 block text-xl font-bold">
            Teléfono
          </label>
          <input
            type="text"
            placeholder="Número de teléfono"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
          />
        </div>


        
       
      
       
        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-indigo-700 w-full py-3 px-10
                      rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                       hover:bg-indigo-800 md:w-auto"
        />
      </form>

      <nav className="mt-10 lg:flex lg:justify-between">
        <Link to="/"
          className="block text-center text-gray-500 hover:cursor-pointer hover:text-indigo-800">
          Ya tienes una cuenta? Inicia Sesion</Link>
      </nav>

    </>
  )
}

export default Registrar