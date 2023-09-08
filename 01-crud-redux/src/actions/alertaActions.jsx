import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'

// Mostrar Alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch(crearAlerta(alerta));
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

// Ocultar Alerta
export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch(ocultarAlerta());
    }
}

const ocultarAlerta = () => ({ 
    type: OCULTAR_ALERTA
});