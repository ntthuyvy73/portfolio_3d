import { motion } from "framer-motion";

import SectionWrapper from "./wrapper/SectionWrapper";
import { textVariant } from "../utils/motion";
import { projects } from "../constants";
import { ProjectCard } from ".";

const Projects = () => {
    return (
        <section>
            <motion.div variants={textVariant()}>
                <p className="sub-text">My Work</p>
                <h2 className="head-text">Projects</h2>
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-start gap-10 ">
                {projects.map((item, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionWrapper(Projects, "projects");
