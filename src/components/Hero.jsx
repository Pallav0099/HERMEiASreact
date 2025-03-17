import { Spotlight } from "../design/Spotlight";
import { StarsBackground } from "../design/StarsBackground";
import { ShootingStars } from "../design/ShootingStars"

const Hero = () => {
    return (
        <div className="relative top-[5rem] w-full overflow-hidden">
            {/* Spotlight Container */}
            <div className="absolute inset-0 z-0">
                <Spotlight />
            </div>
            
            <div id="hero" className="bg-black-4 flex items-center align-middle justify-center min-h-[60vh] xl:min-h-[70vh] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 z-10">
                <div className="relative text-center max-w-7xl mx-auto space-y-1">
                    <p className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-white/90 motion-blur-in-2xl motion-opacity-in-0 motion-duration-2000">
                        HERMEiAS
                    </p>
                    <p className="text-md lg:text-lg xl:text-xl text-white/80 motion-blur-in-2xl motion-opacity-in-0 motion-duration-2000 motion-delay-300">
                        OPEN AND PRIVATE.
                    </p>
                </div>
            </div>
            <StarsBackground />
            <ShootingStars />
        </div>
    );
};

export default Hero;