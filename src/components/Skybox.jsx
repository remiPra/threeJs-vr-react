import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader, EquirectangularReflectionMapping, BackSide } from 'three';

function Skybox(props) {
    const img = "Watercolor_equirectangular-jpg_VR360_view_Trulli_futuristic_210382211_10673520.jpg"
    const texture = useLoader(TextureLoader, props.img);
    texture.mapping = EquirectangularReflectionMapping; // This is crucial for equirectangular textures

    return (<mesh>
        <sphereBufferGeometry args={[700, 80, 60]} /> // A large sphere
        <meshBasicMaterial map={texture} side={BackSide} /> // Use BackSide to render the inside of the sphere
    </mesh>
    );
}

export default Skybox;