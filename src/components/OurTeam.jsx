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
      <section className="min-h-screen bg-gray-950 py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div id="our-team" className="mx-auto max-w-7xl">
          {/* Modified grid columns */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="group relative flex flex-col items-center rounded-xl border-2 border-gray-800 bg-gray-900 p-4 transition-all hover:border-gray-600 hover:bg-gray-850
                  w-full flex-1
                  min-w-[240px] max-w-[300px] mx-auto
                  sm:min-w-[unset] sm:max-w-[unset]"
              >
                {/* Avatar Container */}
                <div className="mb-4 w-[70%] aspect-square overflow-hidden rounded-full shadow-2xl
                  sm:w-[65%] 
                  md:w-[60%] 
                  lg:w-[70%] 
                  xl:w-[75%]">
                  <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    src={member.avatarUrl}
                    alt={`${member.name} - ${member.role}`}
                    loading="lazy"
                  />
                </div>
  
                {/* Text Content */}
                <div className="text-center space-y-2 w-full px-2">
                  <h3 className="text-[1.1rem] font-bold text-gray-100 
                    sm:text-[1.2rem]
                    md:text-[1.3rem]
                    lg:text-[1.2rem]
                    xl:text-[1.3rem]">
                    {member.name}
                  </h3>
                  <p className="text-[1rem] font-medium text-gray-400 
                    sm:text-[1.1rem]
                    md:text-[1.15rem]
                    lg:text-[1rem]
                    xl:text-[1.1rem]">
                    {member.role}
                  </p>
                </div>
  
                {/* Hover Overlay */}
                <div className="hidden md:block absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OurTeam;