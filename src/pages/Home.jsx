// Home.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { VRButton, XR, Controllers, Hands } from '@react-three/xr';
import { OrbitControls } from '@react-three/drei';
import NavBar from '../components/skybox/NavBar';
import Skybox from '../components/Skybox';
import Sound from '../components/skybox/AudioComponent';

function Home() {
  const [audioPlaying, setAudioPlaying] = useState(false); // État pour contrôler la lecture de l'audio

  const handleAudioPlay = () => {
    setAudioPlaying(true); // Activer la lecture de l'audio sur interaction
  };

  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        <OrbitControls />
        <XR>
          {audioPlaying && <Sound url={'./arabic.mp3'} />}
          <Controllers />
          <Hands />
          <NavBar />
          <Skybox img="Epic_Digital_Painting_equirectangular-jpg_Inside_an_art_nouveau_266220476_10676378.jpg" />
      <VRButton onInteract={handleAudioPlay} /> {/* Exemple d'utilisation du VRButton pour déclencher l'audio */}
        </XR>
      </Canvas>
    </div>
  );
}

export default Home;
