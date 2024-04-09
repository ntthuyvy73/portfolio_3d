import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "..";

const Computer = () => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={1} groundColor="white" />
            {/* 
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />

            <pointLight intensity={1} /> */}

            <primitive
                object={computer.scene}
                scale={0.75}
                position={[0, -3.25, -1.5]}
            />
        </mesh>
    );
};

const ComputerCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputerCanvas;
