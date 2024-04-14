import { useEffect, useRef } from 'react';
import { useThree, useLoader } from '@react-three/fiber';
import { AudioLoader, AudioListener, PositionalAudio } from 'three';

function AudioSoundBackground({ url, position }) {
  const sound = useRef();
  const { camera } = useThree();
  const buffer = useLoader(AudioLoader, url);

  useEffect(() => {
    const listener = new AudioListener();
    camera.add(listener);

    const audio = new PositionalAudio(listener);
    audio.setBuffer(buffer);
    audio.setRefDistance(1);
    audio.setLoop(true);
    audio.play();

    sound.current = audio;

    // Add the positional audio to the object's mesh
    return () => {
      sound.current?.disconnect();
    };
  }, [buffer, camera, position]);

  return <primitive object={sound.current} position={position} />;
}

export default  AudioSoundBackground;
