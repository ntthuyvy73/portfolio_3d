import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";

type TagProps = {
    name: string;
    color: string;
};

type ProjectCardProps = {
    index: number;
    name: string;
    description: string;
    tags: TagProps[];
    image: string;
    source_code_link: string;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { index, name, description, tags, image, source_code_link } = project;

    return (
        <Tilt className="bg-tertiary sm:w-[300px] w-full rounded-2xl relative">
            <div className="w-full h-[230px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full rounded-2xl object-cover"
                />

                {source_code_link && (
                    <div
                        className="w-10 h-10 rounded-full bg-tertiary/70 absolute right-3 top-3 cursor-pointer"
                        onClick={() => window.open(source_code_link, "_blank")}
                    >
                        <div className="w-full h-full flex justify-center items-center">
                            <img
                                src={github}
                                alt="github"
                                className="w-[60%] h-[60%] object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="p-5 ">
                <div className="">
                    <h3 className="text-[24px] font-bold">{name}</h3>
                    <p className="p-text">{description}</p>
                </div>

                <div className="flex flex-wrap gap-5 pt-10  ">
                    {tags.map((item, index) => (
                        <div
                            key={`tag-${index}`}
                            className={`${item.color} p-1 rounded-md`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;
