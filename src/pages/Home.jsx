import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {  XR, Controllers, Hands } from '@react-three/xr';
import { OrbitControls } from '@react-three/drei';
import NavBar from '../components/skybox/NavBar';
import Skybox from '../components/Skybox';

function Home() {
  const [audioPlaying, setAudioPlaying] = useState(false); // État pour contrôler la lecture de l'audio

  // Toggle audio playback on interaction
  const toggleAudioPlayback = () => {
    setAudioPlaying(!audioPlaying); // Basculer l'état de la lecture audio
  };

  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        <OrbitControls />
        <XR>
          {/* {audioPlaying && <Sound url={'./arabic.mp3'} />} */}
          <Controllers />
          <Hands />
          <NavBar />
          <Skybox img="Epic_Digital_Painting_equirectangular-jpg_Inside_an_art_nouveau_266220476_10676378.jpg" />
        </XR>
      </Canvas>
    </div>
  );
}

export default Home;
