const $ = document.querySelector.bind(document);

function renderMessage(message) {
  const div = document.createElement('div');
  div.setAttribute('class', 'message');

  const strong = document.createElement('strong');
  strong.appendChild(document.createTextNode(`${message.user}: `));

  const span = document.createElement('span');
  span.appendChild(document.createTextNode(message.msg));

  div.appendChild(strong);
  div.appendChild(span);

  $('.all-messages').appendChild(div);
}

function startClient() {
  // open connection with server
  const socket = io('http://localhost:3000');

  // handle message sent
  const form = document.getElementById('chat');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const user = $('#username').value;
    const msg = $('#message').value;

    if (user.length && msg.length) {
      const msgObject = { user, msg };
      renderMessage(msgObject);
      socket.emit('sendMessage', msgObject);
    }
  });
}

function handleSuccess(stream) {
  // const localVideo = document.getElementById('local-video');
  if (localVideo) {
    localVideo.srcObject = stream;
  }
}

function handleError(error) {
  console.log(
    'navigator.MediaDevices.getUserMedia error: ',
    error.message,
    error.name
  );
}

navigator.getUserMedia(
  { video: true, audio: true },
  stream => handleSuccess(stream),
  error => handleError(error)
);

document.onload = startClient();
