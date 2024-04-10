import { motion } from "framer-motion";
import { ComputerCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className="w-full relative h-screen flex flex-col ">
            <div className="padding-x absolute inset-0 xl:top-40 top-20 max-w-7xl mx-auto flex items-start  ">
                {/*timeline  */}
                <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-purple" />
                    <div className="w-1 h-60 sm:h-30 violet-gradient" />
                </div>
                {/* info */}
                <div>
                    <h1 className="lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]">
                        Hi, I'm
                        <span className="font-bold text-purple"> Vy</span>
                    </h1>
                    <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
                        I develop app and web applications.
                    </p>
                </div>
            </div>

            {/* computer */}

            <ComputerCanvas />

            {/* scroll about */}
            <a
                href="#about"
                className="w-full absolute xs:bottom-10 bottom-3 flex justify-center items-center z-10"
            >
                <div className="h-10 w-7 border-2 border-secondary flex justify-center rounded-xl ">
                    <motion.div
                        className="w-3 h-3 rounded-full bg-secondary"
                        animate={{ y: [0, 25, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </a>
        </section>
    );
};

export default Hero;
