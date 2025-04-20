import { motion } from "framer-motion";
import { Users, Clock, FileText, Zap } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "10K+",
        label: "Active Users",
        description: "Legal professionals using our platform"
    },
    {
        icon: Clock,
        value: "50%",
        label: "Time Saved",
        description: "Average reduction in research time"
    },
    {
        icon: FileText,
        value: "1M+",
        label: "Documents Analyzed",
        description: "Legal documents processed daily"
    },
    {
        icon: Zap,
        value: "99.9%",
        label: "Accuracy",
        description: "In legal analysis and predictions"
    }
];

const Stats = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        By the Numbers
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Our impact in transforming legal research and analysis
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-lg font-semibold text-white mb-2">{stat.label}</p>
                                <p className="text-white/60">{stat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats; 