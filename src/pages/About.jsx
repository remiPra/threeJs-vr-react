import React from 'react';
import { Canvas } from '@react-three/fiber';
import Skybox from '../components/Skybox'; // Importez votre composant Skybox
import { OrbitControls } from '@react-three/drei'
import { Pigeon } from '../components/Pigeon';
import RedCube from '../components/skybox/RedCube';
import CameraController from '../components/skybox/CameroController';
import { Text } from '@react-three/drei'; // Import the Text component
import AudioSoundBackground from '../components/skybox/AudioComponent';

function Home() {
  const img = "Watercolor_equirectangular-jpg_VR360_view_Trulli_futuristic_210382211_10673520.jpg"

  return (
    <div style={{ height: '100vh' }}>

      {/* Ajoutez le composant Canvas avec votre Skybox à l'intérieur */}

      <Canvas>
        {/* <CameraController/> */}
        <OrbitControls />
        <Text
          position={[-48, 35, -150]} // Position of the text in your scene
          color="navy" // Default is white
          fontSize={7}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'center'}
          // font="/path-to-your-font.ttf" // Path to your .ttf font file
          anchorX="center" // Horizontal anchor point
          anchorY="middle" // Vertical anchor point
        >
          GOD SHIVA
        </Text>
        <Skybox img={img} />
        <RedCube color="blue" mesh={[-20, -10, -500]} />
        <RedCube color="red" mesh={[100, 0, 50]} />

        {/* <Pigeon /> */}
        {/* <Pigeon position={[2, 0, -5]} scale={[0.01, 0.01, 0.01]} /> Adjust scale as needed */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* <AudioSoundBackground url="Dune.mp3" position={[0, 0, 0]} / > */}
      </Canvas>
    </div>
  );
}

export default Home;