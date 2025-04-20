import { motion } from "framer-motion";
import { Shield, Lightbulb, Users, Globe } from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Security First",
        description: "We prioritize the security and privacy of our users' data above all else, implementing enterprise-grade encryption and security measures."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We constantly push the boundaries of legal technology, developing cutting-edge solutions that transform the legal industry."
    },
    {
        icon: Users,
        title: "User-Centric",
        description: "Our products are designed with legal professionals in mind, ensuring intuitive interfaces and powerful features that enhance productivity."
    },
    {
        icon: Globe,
        title: "Global Impact",
        description: "We're committed to making legal services more accessible worldwide, breaking down barriers to justice through technology."
    }
];

const Values = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Core Values
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        The principles that guide everything we do
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                                    <value.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                                <p className="text-white/70">{value.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values; 