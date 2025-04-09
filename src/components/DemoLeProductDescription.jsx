import { TextGenerateEffect } from "../design/TextGenerateEffect"
import { motion } from "motion/react";
import PhoneRight from "../assets/PhoneRight2.png"

const listVariants = {
    hidden: { opacity: 0, filter: "blur(20px)" },
    show: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            staggerChildren: 0.2,
            delay: 0.2,
        },
    },
};

const listItemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const DemoLeProductDescription = () => {
    return (
        <section className="items-center py-5 mx-auto max-w-[90vw] md:max-w-[85vw]">
            <div className="min-h-[60vh]lg:min-h-[40vh]">

            </div>
            <div>
                <TextGenerateEffect words={'Heading Heading Heading'} duration={.5} className={"flex text-center text-2xl lg:text-3xl"} />
                <p className="text-md md:text-md xl:text-lg motion-preset-slide-up-md mt-3">"Our AI-powered model simplifies legal research, answers legal queries, and assists with document generation — in seconds. Built for lawyers, students, businesses, and individuals seeking fast, accurate legal guidance."</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-4">
                <div className="order-2">
                    <img src={PhoneRight} alt="demole" className="max-h-[22rem] md:pl-30" />
                </div>
                <div className="order-1">
                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ margin: "-100px", once: true }}
                        className="list-disc space-y-4 mb-3 pl-4 text-sm md:text-md xl:text-lg"
                    >
                        <motion.li variants={listItemVariants}>
                            <p className="text-white/90">
                                <strong>Instant Legal Query Resolution</strong>: Every conversation you have, every idea you share, should remain your own. We will never compromise your privacy for profit.
                            </p>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <p className="text-white/90">
                                <strong>AI-powered Document Drafting</strong>: You deserve to know how your data is handled. Our systems are open, our policies are clear, and we commit to never selling your data to anyone.
                            </p>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <p className="text-white/90">
                                <strong>Case Law & Statute Search</strong>: From end-to-end encryption to cutting-edge security protocols, we ensure that your work stays private — even from us.
                            </p>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <p className="text-white/90">
                                <strong>Secure & Private Communication</strong>: Our apps are built without the distractions of invasive ads. The only thing we'll ever ask for is your trust.
                            </p>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <p className="text-white/90">
                                <strong>Control is Yours</strong>: We provide you with the tools to manage your own security, customize your experience, and make informed choices about how you communicate.
                            </p>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </section>
    )
}
export default DemoLeProductDescription;