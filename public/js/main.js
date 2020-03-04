function handleSuccess(stream) {
  const localVideo = document.getElementById('local-video');
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
