import { useState, useEffect } from 'react';

export function useUserMedia(mediaStreamConstraints) {
  const [mediaStream, setMediaStream] = useState(null);

  function handleError(err) {
    console.log('navigation.getUserMedia error:', err);
  }

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          mediaStreamConstraints
        );
        setMediaStream(stream);
      } catch (err) {
        handleError(err);
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => track.stop());
      };
    }
  }, [mediaStream, mediaStreamConstraints]);

  return mediaStream;
}
