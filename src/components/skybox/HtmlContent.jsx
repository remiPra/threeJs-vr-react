import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, Plane } from '@react-three/drei';
import * as THREE from 'three'
const HtmlContent = () => {
  return (
    <mesh position={[0, 0, -2]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial >
        <Html>
          <div style={{ color: 'white', fontSize: '2rem' }}>
            Contenu HTML en VR
          </div>
        </Html>
      </meshBasicMaterial>
    </mesh>
  );
};

export default HtmlContent