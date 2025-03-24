import Button from "./Button";
import { motion } from "motion/react";

const Pricing = () => {
    return (
        <section id="Products" className="px-4 sm:px-6 pt-10 pb-12 lg:px-8">
            <div className="max-w-[72vw] mx-auto">
                <p className="text-xl md:text-2xl mb-5 text-white text-left motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500 motion-delay-700">PRICING</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center">
                    {/* Mystiko */}
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        whileInView={{
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            }
                        }}
                        viewport={{ amount: 0.3, once: true }}
                        className="min-h-[35vh] lg:min-h-[30vh] group relative grid grid-rows-auto items-center rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850"
                    >
                        <div className="w-full px-3 mt-6 mb-4">
                            <p className="text-2xl font-medium text-white/90">Base Plan</p>
                        </div>
                        <ul className="px-8 list-disc">
                            <li>3 Conversations Per day.</li>
                            <li>Our Latest Model.</li>
                            <li>Lorem Ipsum hahah blah blah</li>
                            <li>I ran out of points why</li>
                            <li>we wont make money if u get this one.</li>
                        </ul>
                        <div className="w-full px-3 pt-3">
                            <p className="text-md font-normal text-white/75">
                                Recommended for non-Lawyers.
                            </p>
                        </div>
                        <div className="px-3 mt-3 mb-6">
                            <Button white >Free</Button>
                        </div>
                    </motion.div>

                    {/* EnSights */}
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        whileInView={{
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                delay: 0.3
                            }
                        }}
                        viewport={{ amount: 0.3, once: true }}
                        className="min-h-[35vh] lg:min-h-[30vh] group relative grid grid-rows-auto items-center rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850"
                    >
                        <div className="w-full px-3 mt-6 mb-4">
                            <p className="text-2xl font-medium text-white/90">Individual Plan</p>
                        </div>
                        <ul className="px-8 list-disc">
                            <li>Unlimited Conversations Per day.</li>
                            <li>Our Latest Model.</li>
                            <li>Lorem Ipsum hahah</li>
                            <li>I ran out of points why</li>
                            <li>we wont make money if u get this one.</li>
                        </ul>
                        <div className="w-full px-3 pt-3">
                            <p className="text-md font-normal text-white/75">
                                Recommended for Individuals.
                            </p>
                        </div>
                        <div className="px-3 mt-3 mb-6">
                            <Button white >Rs 299</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0,filter: 'blur(20px)' }}
                        whileInView={{
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                delay: 0.5
                            }
                        }}
                        viewport={{ amount: 0.3, once: true }}
                        className="min-h-[35vh] lg:min-h-[30vh] group relative grid grid-rows-auto items-center rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850"
                    >
                        <div className="w-full px-3 mt-6 mb-4">
                            <p className="text-2xl font-medium text-white/90">Team Plan</p>
                        </div>
                        <ul className="px-8 list-disc">
                            <li>Unlimited Conversations Per day.</li>
                            <li>Our Latest Model.</li>
                            <li>Upto 5 users per account.</li>
                            <li>I ran out of points why</li>
                            <li>we wont make money if u get this one.</li>
                        </ul>
                        <div className="w-full px-3 pt-3">
                            <p className="text-md font-normal text-white/50">
                                Recommended for Law-teams.
                            </p>
                        </div>
                        <div className="px-3 mt-3 mb-6">
                            <Button white >Rs 799</Button>
                        </div>
                    </motion.div>

                    {/* DemoLe AI */}
                    <motion.div
                        initial={{ opacity: 0,filter: 'blur(20px)' }}
                        whileInView={{
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                delay: 0.5
                            }
                        }}
                        viewport={{ amount: 0.3, once: true }}
                        className="min-h-[35vh] lg:min-h-[30vh] group relative grid grid-rows-auto items-center rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850"
                    >
                        <div className="w-full px-3 mt-6 mb-4">
                            <p className="text-2xl font-medium text-white/90">Enterprise Plan</p>
                        </div>
                        <ul className="px-8 list-disc">
                            <li>Unlimited Conversations Per day.</li>
                            <li>Our Latest Model.</li>
                            <li>Upto 25 users per account.</li>
                            <li>I ran out of points why</li>
                            <li>we wont make money if u get this one.</li>
                        </ul>
                        <div className="w-full px-3 pt-3">
                            <p className="text-md font-normal text-white/50">
                                Recommended for Law-firms.
                            </p>
                        </div>
                        <div className="px-3 mt-3 mb-6">
                            <Button white >Rs 1999</Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;