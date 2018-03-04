import '../css/estilos.css';
import makeMessage from './make-message.js';
import renderToDOM from './render-to-dom';
import { firstMessage, delayedMessage } from './messages.js';
renderToDOM(makeMessage(firstMessage));
delayedMessage();

