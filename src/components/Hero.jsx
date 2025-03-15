import svg from "../assets/react.svg";
import ParticleCanvas from "../design/ParticleCanvas";

const Hero = () => {
    return (
        <div>
            <div id="hero" className="bg-black-4 flex flex-col items-center text-center px-6 py-12 z- lg:grid lg:grid-cols-2 lg:items-center lg:text-left lg:px-10 lg:py-20">
                {/* Right Side - Image*/}
                <div className="flex justify-center mt-40 lg:justify-end lg:order-2">
                    <img src={svg} alt="Hero" className="w-32 sm:w-40 md:w-48 lg:w-56" />
                </div>

                {/* Left Side - Text*/}
                <div className="mt-10 lg:mt-85 lg:order-1">
                    <p className="text-6xl sm:text-7xl md:text-8xl font-bold text-white lg:ml-30">Hermeias</p>
                    <p className="text-lg sm:text-xl md:text-2xl text-white py-4 lg:ml-31">Open and Private.</p>
                </div>
            </div>
            <ParticleCanvas />
        </div>
    );
};

export default Hero;