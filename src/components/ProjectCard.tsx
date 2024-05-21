import { Tilt } from "react-tilt";

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
    deploy_link?: string;
    allTags: TagProps[];
};

const ProjectCard = ({
    //index,
    name,
    description,
    tags,
    image,
    source_code_link,
    deploy_link,
    allTags,
}: ProjectCardProps) => {
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
                    <a href={deploy_link} target="_blank">
                        <h3 className="text-[24px] font-bold">{name}</h3>
                    </a>
                    <p
                        className="p-text"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                </div>

                <div className="flex flex-wrap gap-5 pt-10  ">
                    {tags.map((item, index) => {
                        const result = allTags.filter(
                            (m) => m.name === item.name
                        );
                        return (
                            <div
                                key={`tag-${index}`}
                                className={`bg-${result?.[0]?.color}-500 py-1 px-2 rounded-md`}
                                style={{ backgroundColor: result?.[0]?.color }}
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;
