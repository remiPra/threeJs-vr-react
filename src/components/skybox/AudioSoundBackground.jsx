import React, { useEffect, useRef } from 'react';
import { useThree, useLoader } from '@react-three/fiber';
import { AudioLoader, AudioListener, PositionalAudio } from 'three';

const AudioComponent = ({ url }) => {
    const sound = useRef();
    const { camera } = useThree();
    const listener = new AudioListener();
    const audioBuffer = useLoader(AudioLoader, url);

    useEffect(() => {
        camera.add(listener);
        sound.current = new PositionalAudio(listener);
        sound.current.setBuffer(audioBuffer);
        sound.current.setRefDistance(1);
        sound.current.setLoop(true);
        sound.current.play();
        console.log(sound)

        return () => {
            if (sound.current) {
                sound.current.stop();
                sound.current.disconnect();
            }
            camera.remove(listener);
        };
    }, [audioBuffer, camera]);

    return sound.current ? <primitive object={sound.current} /> : null;
};
export default AudioComponent