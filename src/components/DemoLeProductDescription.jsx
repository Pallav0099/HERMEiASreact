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
        <section className="items-center py-5 min-h-[60h] px-[5vw] lg:px-[13.5vw]">
            <div className="min-h-[50vh] md:min-h-[40vh]">

            </div>
            <div className="max-w-[75vw]">
                <TextGenerateEffect words={'Heading Heading Heading'} duration={.5} className={"flex text-center text-2xl lg:text-3xl"} />
                <p className="text-xl motion-preset-slide-up-md mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis velit tincidunt nulla tristique porttitor. Integer mattis, diam efficitur hendrerit elementum, ante mi viverra est, porta viverra nunc nisl sodales nisi. Nullam vel ullamcorper elit. Nulla condimentum ex vitae facilisis vestibulum. </p>
            </div>
            <div className="grid grid-cols-2 pt-4">
                <div className="order-2">
                    <img src={PhoneRight} alt="demole" className="max-h-[35vh] md:pl-30" />
                </div>
                <div className="order-1">
                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ margin: "-100px", once: true }}
                        className="list-disc space-y-5 mb-3 pl-4"
                    >
                        <motion.li variants={listItemVariants}>
                            <p className="text-white/90">
                                <strong>Privacy is a Human Right</strong>: Every conversation you have, every idea you share, should remain your own. We will never compromise your privacy for profit.
                            </p>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <p className="text-white/90">
                                <strong>Transparency is Key</strong>: You deserve to know how your data is handled. Our systems are open, our policies are clear, and we commit to never selling your data to anyone.
                            </p>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <p className="text-white/90">
                                <strong>Encryption is Essential</strong>: From end-to-end encryption to cutting-edge security protocols, we ensure that your work stays private — even from us.
                            </p>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <p className="text-white/90">
                                <strong>Freedom from Ads</strong>: Our apps are built without the distractions of invasive ads. The only thing we'll ever ask for is your trust.
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