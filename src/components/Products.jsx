import Button from "./Button";
import { motion } from "motion/react";

const Products = () => {
    return (
        <section id="Products" className="py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-7xl mt-[10vh] mx-auto">
                <p className="text-2xl mb-4 text-white">OUR PRODUCTS</p>
                <motion.div 
                    variants={{
                        hidden: { opacity: 0, filter: 'blur(20px)' },
                        visible: {
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                                staggerChildren: 0.15,
                                filter: { duration: 0.6 },
                            },
                        },
                    }} 
                    viewport={{ amount: 0.5, margin: "-100px" }}
                    initial="hidden"
                    whileInView="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center"
                >
                    {/* Mystiko */}
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0,},
                            visible: { 
                                opacity: 1,
                                transition: { duration: 0.4 } 
                            }
                        }} 
                        className="min-h-[35vh] lg:min-h-[30vh] group relative grid grid-rows-auto items-center rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850"
                    >
                        <div className="w-full row-1 px-3 mt-6 mb-4">
                            <p className="text-2xl font-medium text-white/90">Mystiko</p>
                        </div>
                        <div className="w-full px-3 row-2">
                            <p className="text-lg font-normal text-white/75">
                                A next-generation secure messaging platform that puts your privacy first. 
                                With end-to-end encryption, self-destructing messages, and zero data collection, 
                                Mystiko ensures your conversations remain truly private.
                            </p>
                        </div>
                        <div className="px-3 row-3 mt-10 mb-6">
                            <Button white href="#Mystiko">Learn More</Button>
                        </div>
                    </motion.div>

                    {/* EnSights */}
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0,},
                            visible: { 
                                opacity: 1,
                                transition: { duration: 0.4 } 
                            }
                        }} 
                        className="min-h-[35vh] lg:min-h-[30vh] group relative grid grid-rows-auto items-center rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850"
                    >
                        <div className="w-full row-1 px-3 mt-6 mb-4">
                            <p className="text-2xl font-medium text-white/90">EnSights</p>
                        </div>
                        <div className="w-full px-3 row-2">
                            <p className="text-lg font-normal text-white/75">
                                A revolutionary localized LLM solution that securely analyzes your company's sales data. 
                                Transform raw data into actionable insights while keeping your sensitive information 
                                completely private and on-premises.
                            </p>
                        </div>
                        <div className="px-3 row-3 mt-10 mb-6">
                            <Button white href="#EnSights">Learn More</Button>
                        </div>
                    </motion.div>

                    {/* DemoLe AI */}
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0,},
                            visible: { 
                                opacity: 1,
                                transition: { duration: 0.4 } 
                            }
                        }} 
                        className="min-h-[35vh] lg:min-h-[30vh] group relative grid grid-rows-auto items-center rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850"
                    >
                        <div className="w-full row-1 px-3 mt-6 mb-4">
                            <p className="text-2xl font-medium text-white/90">DemoLe AI</p>
                        </div>
                        <div className="w-full px-3 row-2">
                            <p className="text-lg font-normal text-white/75">
                                Democratizing legal assistance through AI trained on comprehensive legal data. 
                                Get instant access to legal information, document analysis, and guidance for 
                                common legal issues, making justice more accessible to all.
                            </p>
                        </div>
                        <div className="px-3 row-3 mt-10 mb-6">
                            <Button white href="#DemoLe">Learn More</Button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;