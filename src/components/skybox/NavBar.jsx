import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Plane, Box } from '@react-three/drei';
import NavbarItem from './NavBarItem'


const Navbar = () => {
    const handleNavClick = (item) => {
      console.log(`Clicked on ${item}`);
      // Vous pouvez ajouter ici votre logique de navigation
    };
  
    return (
      <group position={[0, 0, -2]}>
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

  export default Navbar