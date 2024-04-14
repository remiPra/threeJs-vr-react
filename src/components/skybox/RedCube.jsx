import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader, EquirectangularReflectionMapping, BackSide, MeshStandardMaterial } from 'three';
import { Pigeon } from '../Pigeon';

function RedCube(props) {
    return (
        <mesh  position={props.mesh}> 
            {/* <boxBufferGeometry args={[100, 100, 100]} />
            <meshStandardMaterial color={props.color} /> 
             */}
            <Pigeon  scale={[10, 10, 10]} />

        </mesh>
    );
}
export default RedCube