// Home.jsx
import React from 'react';
import Skybox from '../components/Skybox';
import { Canvas } from '@react-three/fiber'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { OrbitControls } from '@react-three/drei';
import Navbar from '../components/skybox/Navbar';

function Home() {
  return (
    <div style={{ height: '100vh' }}>
    <VRButton />
    <Canvas>
      <Navbar/>
      <OrbitControls/>
      <XR>
        <Controllers />
        <Hands />
        <Skybox img="Epic_Digital_Painting_equirectangular-jpg_Inside_an_art_nouveau_266220476_10676378.jpg"/>
      </XR>
    </Canvas>
  </div>
  );
}

export default Home;
