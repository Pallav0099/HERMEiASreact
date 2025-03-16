const FeatureSection = () => {
    const features = [
      {
        title: "Responsive Design",
        description: "Perfectly adapted to all screen sizes and devices",
        icon: "📱",
      },
      {
        title: "Lightning Fast",
        description: "Optimized for maximum performance and speed",
        icon: "⚡",
      },
      {
        title: "Secure Platform",
        description: "Enterprise-grade security for your peace of mind",
        icon: "🔒",
      },
      {
        title: "Easy Customization",
        description: "Tailor every aspect to match your brand",
        icon: "🎨",
      },
    ];
  
    return (
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Modern Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build amazing digital experiences
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-blue-100 rounded-lg text-3xl transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
  
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-blue-500 transition-colors duration-300" />
              </div>
            ))}
          </div>
  
          {/* Decorative Element */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10" />
        </div>
      </section>
    );
  };
  
  export default FeatureSection;