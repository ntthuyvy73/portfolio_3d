import { motion } from "framer-motion";

const SectionWrapper = (Component: any, idName: string) =>
    function HOC() {
        return (
            <motion.div
                id={idName}
                className="padding max-w-7xl mx-auto relative z-0"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <Component />
            </motion.div>
        );
    };

export default SectionWrapper;
