import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Tooltip } from "react-tooltip";
import { Loader } from "..";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

type BallCanvasProps = {
    name: string;
    icon: any;
};

const Ball = ({ name, icon }: BallCanvasProps) => {
    const [decal] = useTexture([icon]);
    return (
        <>
            <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                <ambientLight intensity={0.25} />
                <directionalLight position={[0, 0, 0.05]} />
                <mesh castShadow receiveShadow scale={2.75}>
                    <icosahedronGeometry args={[1, 1]} /> {/* bat buoc co' */}
                    <meshStandardMaterial
                        color="#fff8eb"
                        polygonOffset
                        polygonOffsetFactor={-5}
                        flatShading
                    />
                    <Decal
                        position={[0, 0, 1]}
                        rotation={[2 * Math.PI, 0, 6.25]}
                        scale={1}
                        map={decal}
                    />
                </mesh>
            </Float>
        </>
    );
};

const BallCanvas = ({ name, icon }: BallCanvasProps) => {
    return (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false} />
                <Ball name={name} icon={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
