import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html className=" flex flex-col justify-center items-center">
            <span className="canvas-loader" />
            <p className="font-[14px] text-white mt-10 flex">
                <span>{progress.toFixed(2)} </span> <span> %</span>
            </p>
        </Html>
    );
};

export default Loader;
