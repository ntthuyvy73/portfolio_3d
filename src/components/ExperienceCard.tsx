import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceCardProps = {
    title: string;
    company_name: string;
    icon: any;
    iconBg: string;
    date: string;
    points: string[];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    const { title, company_name, icon, iconBg, date, points } = experience;

    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "text-white" }}
            contentArrowStyle={{
                border: "7px solid bg-purple ",
            }}
            date={date}
            iconStyle={{ background: "white" }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={icon}
                        alt=""
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div className="m-2">
                <h3 className="text-[24px] font-bold">{title}</h3>
                <p className="text-secondary text-[16px] font-semibold italic">
                    {company_name}
                </p>

                <ul className="list-disc ml-5 mt-3">
                    {points.map((item, index) => (
                        <li
                            key={`point-${index}`}
                            className="mt-2 text-justify text-[14px] tracking-wider "
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
