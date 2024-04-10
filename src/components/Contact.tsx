import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import SectionWrapper from "./wrapper/SectionWrapper";
import { EarthCanvas } from "./canvas";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();

    const [form, setForm] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setIsLoading(true);

        emailjs
            .sendForm(
                "service_kugcsuf",
                "template_obmqank",
                e.target,
                "GsmUvq8H830pRu35g" //public key
            )
            .then(
                () => {
                    setIsLoading(false);
                    alert("Thank you!");
                    setForm({
                        from_email: "",
                        message: "",
                        from_name: "",
                    });
                },
                (error) => {
                    console.log(error);

                    alert("Something went wrong! " + error);
                    setIsLoading(false);
                }
            );
    };

    return (
        <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex  gap-10 overflow-hidden">
            <motion.div
                className="flex-[0.75] bg-black-100 p-10 rounded-2xl"
                variants={slideIn("left", "", 0.2, 1)}
            >
                <p className="sub-text">Get in touch</p>
                <h2 className="head-text">Contact</h2>

                <form
                    ref={formRef.current}
                    onSubmit={handleSubmit}
                    className="mt-10"
                >
                    <label className="flex flex-col gap-5 font-medium">
                        <span>Your Name</span>
                        <input
                            type="text"
                            className="p-5 bg-tertiary w-full text-white rounded-xl outline-none border-none  placeholder:text-secondary placeholder:italic"
                            name="from_name"
                            value={form.from_name}
                            onChange={handleChange}
                            placeholder="Type your name ..."
                        />
                    </label>

                    <label className="flex flex-col gap-5 mt-10  font-medium">
                        <span>Your Email</span>
                        <input
                            type="email"
                            className="p-5 bg-tertiary w-full text-white rounded-xl outline-none border-none  placeholder:text-secondary placeholder:italic"
                            name="from_email"
                            value={form.from_email}
                            onChange={handleChange}
                            placeholder="Type your email ..."
                        />
                    </label>

                    <label className="flex flex-col gap-5 mt-10  font-medium">
                        <span>Your Email</span>
                        <textarea
                            rows={7}
                            className="p-5 bg-tertiary w-full text-white rounded-xl outline-none border-none  placeholder:text-secondary placeholder:italic"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type your message ..."
                        />
                    </label>

                    <button
                        type="submit"
                        className=" mt-10 bg-secondary px-5 py-3 rounded-xl text-primary text-xl shadow-md shadow-primary "
                    >
                        {isLoading ? "Sending" : "Send"}
                    </button>
                </form>
            </motion.div>

            {/* earth */}
            <motion.div
                variants={slideIn("right", "", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
