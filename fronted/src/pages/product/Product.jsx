import { Link } from 'react-router-dom'
const Product = () => {
    return (
        <div>

            {/* <Link to="crear-producto">Crear Producto</Link> */}

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>producto</th>
                        <th>cantidad</th>
                        <th>precio</th>
                    </tr>
                </thead>

            </table>

        </div>
    )
}

export default Product
