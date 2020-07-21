/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
import { MdVideocam, MdVideocamOff, MdMic, MdMicOff } from 'react-icons/md';

import { useUserMedia } from '../../hooks/useUserMedia';

import IconButton from '../IconButton';
import { Container, Options, Camera } from './styles';

const CONSTRAINTS = {
  audio: true,
  video: true,
};

function Video({ ...props }) {
  const [micOn, setMicOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false);
  const videoRef = useRef();
  const mediaStream = useUserMedia(CONSTRAINTS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  return (
    <Container {...props}>
      <Camera
        ref={videoRef}
        onCanPlay={handleCanPlay}
        autoPlay
        playsInline
        muted
      />
      <Options className="options">
        <IconButton
          Icon={micOn ? MdMic : MdMicOff}
          color="#f8a832"
          size={32}
          onClick={() => setMicOn(!micOn)}
        />
        <IconButton
          Icon={videoOn ? MdVideocam : MdVideocamOff}
          color="#f8a832"
          size={32}
          onClick={() => setVideoOn(!videoOn)}
        />
      </Options>
    </Container>
  );
}

export default Video;
