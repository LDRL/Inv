import { useState } from "react"
import "./create.css"
import TagInput from "../../components/Tag/TagInput"
const Create = () => {
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fechaEntrega, setFechaEntrega] = useState("")
  const [cliente, setCliente] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form
      className="formulario md:w-1/2"
      onSubmit={handleSubmit}
    >
      {/* {msg && <Alerta alerta={alerta} />} */}

      <div className='content'>
        <label
          className="label"
          htmlFor="nombre"
        >Código</label>

        <input
          id="nombre"
          type="text"
          className="input"
          placeholder="Código del producto"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div className='content'>
        <label
          className="label"
          htmlFor="descripcion"
        >Descripción</label>

        <textarea
          id="descripcion"
          className="input"
          placeholder="Descripción del Producto"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
      </div>

      <div className='content'>
        <label
          className="label"
          htmlFor="descripcion"
        >Familia</label>

        <textarea
          id="descripcion"
          className="input"
          placeholder="Familia del producto"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
      </div>

      <div className='content'>
        <label
          className="label"
          htmlFor="descripcion"
        >Marca</label>

        <textarea
          id="descripcion"
          className="input"
          placeholder="Marca del producto"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
      </div>

      {/* <div className='content'>
        <label
          className="label"
          htmlFor="fecha-entrega"
        >Fecha Entrega</label>

        <input
          id="fecha-entrega"
          type="date"
          className="input"
          value={fechaEntrega}
          onChange={e => setFechaEntrega(e.target.value)}
        />
      </div> */}

      {/* <div className='content'>
        <label
          className="label"
          htmlFor="cliente"
        >Nombre Cliente</label>

        <input
          id="cliente"
          type="text"
          className="input"
          placeholder="Nombre del Cliente"
          value={cliente}
          onChange={e => setCliente(e.target.value)}
        />
      </div> */}
      <div className='content'>
        <label
          className="label"
          htmlFor="cliente"
        >Precios</label>
        <TagInput />
      </div>

      <input
        type="submit"
        value="Crear Producto"
        className='button button__submit '
      />
    </form>
  )
}

export default Create