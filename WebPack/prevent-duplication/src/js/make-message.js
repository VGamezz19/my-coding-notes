function makeMessage(msg) {
  const message = document.createElement('p');
  message.textContent = msg;
  return message;
}

export default makeMessage;
