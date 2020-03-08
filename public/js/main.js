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

function handleMessages(socket) {
  // handle message sent
  const form = document.getElementById('chat');
  form.addEventListener('submit', event => {
    event.preventDefault();

    const user = $('#username').value;
    const msg = $('#message').value;

    if (user.length && msg.length) {
      const msgObject = { user, msg };
      renderMessage(msgObject);

      // send message to broadcast
      socket.emit('send-message', msgObject);
    }
  });

  // render received messages
  socket.on('received-message', data => {
    renderMessage(data);
  });

  // render old messages in page reload F5
  socket.on('previous-messages', data => {
    data.map(msg => renderMessage(msg));
  });
}

// peerconnection
const peer = new RTCPeerConnection();

function handleVideo(socket) {
  function handleSuccess(stream) {
    const localVideo = document.getElementById('local-video');
    if (localVideo) {
      localVideo.srcObject = stream;
    }

    // add caller track to peer
    stream.getTracks().forEach(track => peer.addTrack(track, stream));
  }

  function handleError(error) {
    console.log(
      'navigator.MediaDevices.getUserMedia error: ',
      error.message,
      error.name
    );
  }

  function handleTrack() {
    peer.ontrack = function({ streams: [stream] }) {
      const remoteVideo = document.getElementById('remote-video');
      if (remoteVideo) {
        remoteVideo.srcObject = stream;
      }
    };
  }

  async function callUser(id) {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(new RTCSessionDescription(offer));

    socket.emit('call-user', {
      offer,
      to: id,
    });
  }

  function createUserElement(id) {
    const div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', 'active-user');

    const p = document.createElement('p');
    p.appendChild(document.createTextNode(`user: ${id}`));

    div.appendChild(p);

    div.addEventListener('click', () => {
      div.classList.add('active--selected');

      // call active user
      callUser(id);
    });

    return div;
  }

  function updateActiveUsers(users) {
    const userList = $('.users-container');

    users.forEach(user => {
      const exists = document.getElementById(user);
      if (!exists) {
        const element = createUserElement(user);
        userList.appendChild(element);
      }
    });
  }

  // update active users list
  socket.on('active-users', ({ users }) => {
    updateActiveUsers(users);
  });

  socket.on('delete-user', id => {
    const element = document.getElementById(id);
    if (element) {
      element.remove();
    }
  });

  socket.on('call-made', async data => {
    await peer.setRemoteDescription(new RTCSessionDescription(data.offer));
    const answer = await peer.createAnswer();
    await peer.setLocalDescription(new RTCSessionDescription(answer));

    socket.emit('make-answer', {
      answer,
      to: data.socket,
    });
  });

  socket.on('answer-made', async data => {
    await peer.setRemoteDescription(new RTCSessionDescription(data.answer));
  });

  // start remotestream
  handleTrack();

  // start localstream
  navigator.getUserMedia(
    { video: true, audio: true },
    stream => handleSuccess(stream),
    error => handleError(error)
  );
}

async function start() {
  // open connection with server
  const socket = io('http://localhost:3000');

  handleMessages(socket);

  handleVideo(socket);
}

// start on page load
document.onload = start();
