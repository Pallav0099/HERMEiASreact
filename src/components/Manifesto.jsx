"use client";
import { motion } from "motion/react";
import { TextGenerateEffect } from "../design/TextGenerateEffect";
import StaggeredList from "../design/StaggeredList";

const manifesto = 'Manifesto: A more open and private future'
const paragraph1 = `In a world where our conversations are increasingly monitored, tracked, and commodified, your data catagorized and sold we stand for something different. We believe that privacy is not a luxury — it's a fundamental right.
`;

const paragraph2 = `At Hermeias, we are committed to creating tools and applications that put you in control. Our goal is simple: to empower individuals with secure and affordable tools from localized AI to messaging that is free from surveillance, advertising, or hidden agendas.`;

const listVariants = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delay: 0.1,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function Manifesto() {
  return (
    <TextGenerateEffect className="font-bold text-xl md:text-2xl lg:text-3xl" duration={0.2} filter={true} words={manifesto} />
  );
}
export function Paragraph1() {
  return (
    <TextGenerateEffect className="text-md lg:text-lg mb-3" duration={0.4} filter={true} words={paragraph1} />
  );
}

export function Paragraph2() {
  return (
    <TextGenerateEffect className="text-md lg:text-lg mb-5" delay={1.5} duration={0.5} filter={true} words={paragraph2} />
  );
}
export function Content() {
  return (
    <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ margin: "-100px", once: true }}
              className="space-y-2 mb-2 mt-3"
            >
              <motion.li variants={listItemVariants}><p className="text-white/90">In a world where our conversations are increasingly monitored, tracked, and commodified, your data catagorized and sold we stand for something different. We believe that privacy is not a luxury — it's a fundamental right.</p></motion.li>
              <motion.li variants={listItemVariants} className="pb-3">
                <p className="text-white/90">
                At <strong>Hermeias</strong>, we are committed to creating tools and applications that put you in control. Our goal is simple: to empower individuals with secure and affordable tools from localized AI to messaging that is free from surveillance, advertising, or hidden agendas.
                </p>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <p className="text-white">
                  We Believe.
                </p>
              </motion.li>
            </motion.ul>
  );
}
export function Content2() {
  return (
    <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ margin: "-100px", once: true }}
              className="space-y-6 mb-5 pt-3"
            >
              <motion.li variants={listItemVariants}>
                <p className="text-white/90">In a world that increasingly threatens personal privacy, we offer a different path: one where you control your data, your messages, and your freedom to communicate without fear. With us, privacy isn't an afterthought — it's the foundation of everything we do.</p>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <p className="text-white">
                Welcome to a new era of messaging. Welcome to privacy. Welcome to <strong>Hermeias</strong>.
                </p>
              </motion.li>
            </motion.ul>
  );
}
