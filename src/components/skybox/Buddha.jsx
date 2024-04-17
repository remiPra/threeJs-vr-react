import React from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';


// Composant pour afficher le modèle 3D
function Buddha() {

    const positionX = 70; // Position sur l'axe X
    const positionY = -70; // Position sur l'axe Y
    const positionZ = 150; // Position sur l'axe Z
  const { scene } = useGLTF('/models/buddha.glb');
  return <primitive       
  rotation={[Math.PI / 2, 9.43, 5.4]} // Rotation de 90 degrés autour de l'axe Y
  object={scene} 
  scale={50}
  position={[positionX, positionY, positionZ]}
 
  
  />;
}
export default Buddha