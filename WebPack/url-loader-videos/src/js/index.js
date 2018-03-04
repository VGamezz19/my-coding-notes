import '../css/estilos.css';
import makeMessage from './make-message.js';
import renderToDOM from './render-to-dom';
import { firstMessage, delayedMessage } from './messages.js';
import platziImg from '../images/platzi.png';
import queEsCore from '../video/que-es-core.webm';

const img = document.createElement('img')
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src', queEsCore);
video.setAttribute('width', 480);
video.setAttribute('autoplay', true);
video.setAttribute('loop', true);
video.setAttribute('controls', true);
document.body.append(video);

renderToDOM(makeMessage(firstMessage));
delayedMessage();
