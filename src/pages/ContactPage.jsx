import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StarsBackground } from "../design/StarsBackground";

const ContactPage = () => {
    return (
        <div className="relative">
            <StarsBackground />
            <Header />
            <main className="relative z-10">
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
                                Get in Touch
                            </h2>
                            <p className="text-xl text-white/70 max-w-2xl mx-auto">
                                Have questions or want to learn more? We'd love to hear from you.
                            </p>
                        </motion.div>

                        <div className="flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8 max-w-md w-full"
                            >
                                <div className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-white/10 rounded-lg">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                                            <p className="text-white/70">contact@hermeias.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-white/10 rounded-lg">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                                            <p className="text-white/70">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-white/10 rounded-lg">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                                            <p className="text-white/70">123 Innovation Drive, Tech City, TC 12345</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form - Commented out for now
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
                            >
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                                            placeholder="Your message"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors duration-300"
                                    >
                                        <span className="mr-2">Send Message</span>
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </motion.div>
                            */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage; 