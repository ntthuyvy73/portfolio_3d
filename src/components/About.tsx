import { motion } from "framer-motion";

import SectionWrapper from "./wrapper/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { ServiceCard } from ".";

const About = () => {
    return (
        <section>
            <motion.div variants={textVariant()}>
                <p className="sub-text">Introduce</p>
                <h2 className="head-text">Overview</h2>
            </motion.div>
            <motion.p className="p-text" variants={fadeIn("", "", 0.1, 2)}>
                I'm a skilled software developer with experience in TypeScript
                and JavaScript, and expertise in frameworks like React, Node.js,
                and Three.js. Besides, I have experience in backend such as
                ASP.NET, .NET Core. <br />
                I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that
                solve real-world problems. Let's work together to bring your
                ideas to life!
            </motion.p>

            {/* services */}
            <div className="flex flex-row justify-center gap-10 flex-wrap mt-10">
                {services.map((item, index) => (
                    <ServiceCard
                        key={`service-${index}`}
                        index={index}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionWrapper(About, "about");
