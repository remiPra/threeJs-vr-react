import React, { useRef, useState } from 'react';
import { Text } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Controllers, Hands, XR } from '@react-three/xr';


function PlayAudioButton() {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const sound = useRef(new Audio('./arabic.mp3')); // Chemin vers votre fichier audio

    const handleInteraction = () => {
        if (!audioPlaying) {
            sound.current.play();
            setAudioPlaying(true);
        } else {
            sound.current.pause();
            setAudioPlaying(false);
        }
    };

    return (
        <mesh position={[0, 1, -3]} onClick={handleInteraction}>
            <boxGeometry color="black" args={[1, 1, 1]} />
            <meshStandardMaterial color={audioPlaying ? 'green' : 'red'} />
            <Text position={[0, 0, 1]} fontSize={0.2}>
                {audioPlaying ? 'Pause' : 'Play'}
            </Text>
        </mesh>
    );
}

function Exemple() {
    return (
        <div style={{ height: '100vh' }}>
            <Canvas>
                <XR>
            <OrbitControls />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <PlayAudioButton />
                <Controllers />
          <Hands />

                </XR>
                <color attach="background" args={['black']} />

            </Canvas>
        </div>
    );
}

export default Exemple;
