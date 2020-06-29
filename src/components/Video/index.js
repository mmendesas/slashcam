/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { MdVideocam, MdVideocamOff, MdMic, MdMicOff } from 'react-icons/md';

import IconButton from '../IconButton';
import { Container, Options } from './styles';

function Video({ ...props }) {
  const [micOn, setMicOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false);

  return (
    <Container {...props}>
      <Options>
        <IconButton
          Icon={micOn ? MdMic : MdMicOff}
          color="#555"
          size={32}
          onClick={() => setMicOn(!micOn)}
        />
        <IconButton
          Icon={videoOn ? MdVideocam : MdVideocamOff}
          color="#555"
          size={32}
          onClick={() => setVideoOn(!videoOn)}
        />
      </Options>
    </Container>
  );
}

export default Video;
