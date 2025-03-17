import { motion } from "motion/react";
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Suryansh Nandwani",
      role: "CEO",
      avatarUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
      name: "Ariyan Basu",
      role: "CTO",
      avatarUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
      name: "Saptarshi Paul",
      role: "CIO",
      avatarUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
      name: "Pallav Singh",
      role: "Project Manager",
      avatarUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={{
          hidden: { opacity: 0, filter: 'blur(20px)' },
          show: {
            opacity: 1, filter: 'blur(0px)',
            transition: {
              staggerChildren: 0.15,
              filter: { duration: 0.6 },
            },
          },
        }} initial="hidden" animate="show" className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-4 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <motion.div variants={{hidden: {opacity:0}, show: {opacity:1} }}
              key={member.name}
              className="group relative flex flex-col items-center rounded-xl border-1 border-white/8 bg-white/2 p-3 sm:p-4 transition-all hover:border-gray-700 hover:bg-gray-850
                w-full flex-1 mx-auto overflow-hidden"
            >
              {/* Avatar Container */}
              <div className="mb-3 sm:mb-4 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[75%] xl:w-[80%] aspect-square overflow-hidden rounded-full shadow-xl">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={member.avatarUrl}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="text-center space-y-1 sm:space-y-1 w-full px-1 sm:px-2">
                <h3 className="text-sm sm:text-base md:text-md font-semibold text-gray-100">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="hidden md:block absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
