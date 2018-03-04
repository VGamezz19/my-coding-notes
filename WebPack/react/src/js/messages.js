import makeMessage from './make-message.js';
import renderToDOM from './render-to-dom.js';

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(() => {
    todoOk('Han pasado 3 segundos OMG')
  }, 3000)
});

module.exports = {
  firstMessage: 'Hola mundo desde un módulo',
  delayedMessage: async () => {
    const message = await waitTime;
    renderToDOM(makeMessage(message));
  }
}

