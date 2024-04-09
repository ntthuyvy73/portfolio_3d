import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

type ServiceCardProps = {
    index: number;
    title: string;
    icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className=" p-1 green-pink-gradient xs:w-[250px] w-full rounded-2xl "
        >
            <div className="bg-tertiary min-h-[280px] flex flex-col justify-center items-center  rounded-2xl">
                <img src={icon} alt="" className="object-contain w-16 h-16" />
                <h2 className="text-[20px] font-bold text-center mt-10">
                    {title}
                </h2>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
