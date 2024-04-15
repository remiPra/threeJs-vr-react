import React from 'react';
import { Text, Plane, Box } from '@react-three/drei';

const NavbarItem = ({ children, onClick, ...props }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <Box onClick={handleClick} args={[1, 0.2, 0.2]} {...props}>
      <meshStandardMaterial color="white" />
      <Text position={[0, 0, 0.1]} fontSize={0.15}>
        {children}
      </Text>
    </Box>
  );
};

export default NavbarItem;