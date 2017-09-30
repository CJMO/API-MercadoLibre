import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import Nasa from './Nasa';
import MercadoLibre from './MercadoLibre';
import registerServiceWorker from './registerServiceWorker';

/* Actualizar contenido con JSX */
ReactDOM.render(
    <div>        
        <MercadoLibre />
    </div>,    
    document.getElementById('root'))

registerServiceWorker()
