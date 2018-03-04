import '../css/estilos.css';
import platziImg from '../../images/platzi.png'

import makeMessage from './make-message.js';
import renderToDOM from './render-to-dom';
import { firstMessage, delayedMessage } from './messages.js';
renderToDOM(makeMessage(firstMessage));
delayedMessage();


// const img = document.createElement('img');
// img.setAttribute('src', platziImg)

// renderToDOM(img)