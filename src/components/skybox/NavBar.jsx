import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'; // Importation de Mesh depuis @react-three/fiber
import { Text, Plane } from '@react-three/drei';
import NavbarItem from './NavBarItem';
import * as THREE from 'three';



const gradientShader = {
  uniforms: {
    colorA: { value: new THREE.Color('#ff0000') },
    colorB: { value: new THREE.Color('#0000ff') },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 colorA;
    uniform vec3 colorB;
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(mix(colorA, colorB, vUv.x), 1.0 - vUv.y);
    }
  `,
};

const NavBar = () => {
  const materialRef = useRef();
  const groupRef = useRef();

  // Créer un nouveau matériau de couleur bleue
  const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });

  const handleNavClick = (item) => {
    console.log(`Clicked on ${item}`);
    // Vous pouvez ajouter ici votre logique de navigation
  };

  return (
        
      <group   scale={[12, 10, 1]} position={[-5, 18, -28]}>
        <NavbarItem position={[-1, 0, 0]} onClick={() => handleNavClick('Home')}>
          Home
        </NavbarItem>
        <NavbarItem position={[0, 0, 0]} onClick={() => handleNavClick('About')}>
          About
        </NavbarItem>
        <NavbarItem position={[1, 0, 0]} onClick={() => handleNavClick('Contact')}>
          Contact
        </NavbarItem>
      </group>
  
  );
};

export default NavBar;