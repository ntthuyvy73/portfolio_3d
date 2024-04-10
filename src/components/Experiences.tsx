import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";

import SectionWrapper from "./wrapper/SectionWrapper";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
import { ExperienceCard } from ".";

import "react-vertical-timeline-component/style.min.css";

const Experiences = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sub-text">WHAT I HAVE DONE SO FAR</p>
                <h2 className="head-text">Work Experience</h2>
            </motion.div>

            <div>
                <VerticalTimeline>
                    {experiences.map((item, index) => (
                        <ExperienceCard key={`exp-${index}`} {...item} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experiences, "work");
