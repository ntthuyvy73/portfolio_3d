import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "..";

const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf");
    return (
        <mesh>
            <primitive object={earth.scene} scale={2} />
        </mesh>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default EarthCanvas;
