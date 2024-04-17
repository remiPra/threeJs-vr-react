import React, { useRef, useEffect } from 'react';

function AudioPlayer({ src, autoplay = false }) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (autoplay && audioRef.current) {
            audioRef.current.play().catch(error => console.error("Error playing audio:", error));
        }
    }, [autoplay]);

    return (

        <audio style={{position:'absolute',zIndex:2}} autoplay ref={audioRef} src={src} controls loop>
            Your browser does not support the audio element.
        </audio>
    );
}

// export default function App() {
//     return (
//         <div>
//             <AudioPlayer src="/path/to/your/audio.file" autoplay={true} />
//             {/* Votre contenu React Three Fiber ici */}
//         </div>
//     );
// }
export default AudioPlayer