import React, { Suspense, useRef, useEffect, useState } from "react";
import { useThree, useLoader } from "@react-three/fiber";
import * as THREE from 'three'

function Sound({ url }) {
  const sound = useRef();
  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());
  const [audioReady, setAudioReady] = useState(false); // État pour gérer la disponibilité de l'audio
  const buffer = useLoader(THREE.AudioLoader, url);

  useEffect(() => {
    if (buffer) {
      sound.current.setBuffer(buffer);
      sound.current.setRefDistance(1);
      sound.current.setLoop(true);
      camera.add(listener);
      // Marquer l'audio comme prêt à être joué, nécessite une interaction utilisateur
      setAudioReady(true);
    }
    return () => {
      camera.remove(listener);
    };
  }, [buffer, camera]);

  // Fonction pour démarrer le son, à lier à une interaction utilisateur
  const playSound = () => {
    if (audioReady && !sound.current.isPlaying) {
      sound.current.play();
    }
  };

  return (
    <group onClick={playSound}>
      <positionalAudio ref={sound} args={[listener]} />
    </group>
  );
}

export default Sound;
