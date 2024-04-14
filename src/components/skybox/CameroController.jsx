import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          // Zoom in or move forward
          camera.position.z -= 1;
          break;
        case 'ArrowDown':
          // Zoom out or move backward
          camera.position.z += 1;
          break;
        // Add more cases if you want to handle other directions
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [camera]);

  return null;
}
export default CameraController
// function Scene() {
//   return (
//     <Canvas>
//       <CameraController />
//       {/* ... rest of your scene */}
//     </Canvas>
//   );
// }

// export default Scene;
