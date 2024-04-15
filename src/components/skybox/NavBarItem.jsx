import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Plane, Box } from '@react-three/drei';

const NavbarItem = ({ children, onClick, ...props }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <mesh onClick={handleClick} {...props}>
      <boxGeometry args={[1, 0.2, 0.2]} />
      <meshStandardMaterial color="white" />
      <Text position={[0, 0, 0.1]} fontSize={0.15}>
        {children}
      </Text>
    </mesh>
  );
};

export default NavbarItem