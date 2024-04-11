import { color, motion } from "framer-motion";

import SectionWrapper from "./wrapper/SectionWrapper";
import { textVariant } from "../utils/motion";
import { projects } from "../constants";
import { ProjectCard } from ".";
import { useEffect, useState } from "react";
import { generateRandomColor } from "../utils";

const Projects = () => {
    const [allProjects, setAllProjects] = useState(projects);
    const [allTags, setAllTags] = useState([{ name: "", color: "" }]);
    let colors = [""];

    const getTags = () => {
        const result = [""];

        allProjects.map((project, index) => {
            const tags = project.tags;

            tags.map((tagItem) => {
                const name = tagItem.name;
                const hasData = result.find((o) => o === name);
                if (!hasData) result.push(name);
            });
        });
        return result;
    };

    useEffect(() => {
        const tags = getTags();
        const all = [{ name: "", color: "" }];
        //radom mau
        colors = generateRandomColor(tags.length);

        tags.map((item, index) => {
            if (item !== "") {
                const result = {
                    name: "",
                    color: "",
                };

                (result.name = item), (result.color = "#" + colors[index]);
                all.push(result);
            }
        });

        setAllTags(all);
    }, []);

    return (
        <section>
            <motion.div variants={textVariant()}>
                <p className="sub-text">My Work</p>
                <h2 className="head-text ">Projects</h2>
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-start gap-10 ">
                {projects.map((item, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        allTags={allTags}
                        index={index}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionWrapper(Projects, "projects");
