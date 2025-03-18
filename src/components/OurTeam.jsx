import { motion } from "motion/react";
import { Paragraph1, Paragraph2, Manifesto } from "./Manifesto";
import StaggeredList from "../design/StaggeredList";

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

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Suryansh Nandwani",
      role: "idk man",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Ariyan Basu",
      role: "AI/ML Dev",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Saptarshi Paul",
      role: "Backend Dev",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Pallav Singh",
      role: "Frontend Dev",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-4 lg:grid-cols-4">
          <div className="col-span-2 md:col-span-4">
            <Manifesto />
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
            <StaggeredList />
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
          </div>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, filter: "blur(20px)" }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.6,
                  delay: index * 0.2,
                },
              }}
              viewport={{ margin: "-100px", once: true }}
              className="group relative flex flex-col items-center rounded-xl border border-white/8 bg-white/2 p-3 sm:p-4 transition-all hover:border-gray-700 hover:bg-gray-850 w-full flex-1 mx-auto overflow-hidden"
            >
              <div className="mb-3 sm:mb-4 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[75%] xl:w-[80%] aspect-square overflow-hidden rounded-full shadow-xl">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={member.avatarUrl}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                />
              </div>

              <div className="text-center space-y-1 sm:space-y-1 w-full px-1 sm:px-2">
                <h3 className="text-sm sm:text-base md:text-md font-semibold text-gray-100">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">
                  {member.role}
                </p>
              </div>

              <div className="hidden md:block absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
