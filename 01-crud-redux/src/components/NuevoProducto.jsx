import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';


// Action de redux
import { crearNuevoProductoAction } from "../actions/productoActions"
import { useState } from 'react';

const NuevoProducto = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // mandar a llamar el action de producto action
    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    const submitNuevoProducto = (e) => {
        e.preventDefault();

        // Validar Formulario
        if (nombre.trim() === "" || precio <= 0) {

            const alerta = {
                msg: 'Ambos campos son obligatorios',
                clases: 'alert alert-danger text-uppercase p-3'
            }
            dispatch(mostrarAlerta(alerta));

            return;

        }

        // Si no hay errores
        dispatch(ocultarAlertaAction());

        // Crear el nuevo producto
        agregarProducto(
            {
                nombre,
                precio
            }
        );

        // Redireccion
        navigate('/');
    };

    // Manipulando el Error de Redux
    const cargando = useSelector(state => state.productos.loading);
    const err = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);


    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wigth-bold">Agregar Nuevo Producto</h2>

                        {alerta ? <p className={`${alerta.clases}`}>{alerta.msg}</p> : null}

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Producto</label>
                                <input
                                    id="nombre"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nuevo Producto"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio Producto</label>
                                <input
                                    id="precio"
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    value={precio}
                                    onChange={e => setPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        {cargando ? <p>Cargando...</p> : null}
                        {err ? <p className='alert alert-danger p-2 text-center text-uppercase'>Hubo un Error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto