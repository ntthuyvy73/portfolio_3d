import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const SocialWrapper = () => {
    return (
        <div className="flex flex-col justify-center text-5xl gap-10 mx-10">
            <a
                href="tel:+356203225"
                className="w-20 h-20 border-2 rounded-full border-purple flex justify-center items-center shadow-md shadow-purple text-white"
            >
                <CiPhone />
            </a>

            <a
                href="mailto:ntthuyvy73@gmail.com"
                className="w-20 h-20 border-2 rounded-full border-purple flex justify-center items-center shadow-md shadow-purple text-white"
            >
                <MdOutlineEmail />
            </a>
        </div>
    );
};

export default SocialWrapper;
