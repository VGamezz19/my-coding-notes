import '../css/estilos.css';
import makeMessage from './make-message.js';
import renderToDOM from './render-to-dom';
import { firstMessage, delayedMessage } from './messages.js';
import platziImg from '../images/platzi.png';

const img = document.createElement('img')
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);

renderToDOM(makeMessage(firstMessage));
delayedMessage();
