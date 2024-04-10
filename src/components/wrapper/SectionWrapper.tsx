import { motion } from "framer-motion";
import SocialWrapper from "./SocialWrapper";
import NavigationDotWrap from "./NavigationDotWrap";

const SectionWrapper = (Component: any, idName: string, isShowInfo = true) =>
    function HOC() {
        return (
            <div className="flex flex-row w-full padding  mx-auto" id={idName}>
                {isShowInfo && <SocialWrapper />}

                <motion.div
                    className="flex-1  max-w-7xl relative z-0  mx-auto"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <Component />
                </motion.div>

                {isShowInfo && <NavigationDotWrap />}
            </div>
        );
    };

export default SectionWrapper;