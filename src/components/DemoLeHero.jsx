import { Spotlight } from "../design/Spotlight";
import { StarsBackground } from "../design/StarsBackground";
import { ShootingStars } from "../design/ShootingStars"
import DemoLe from '../assets/DemoLeHero.webp?import';

const DemoLeHero = () => {
    return (
        <div className="relative top-[5rem] w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Spotlight />
            </div>
            <div className="grid md:grid-cols-2 sm:grid-rows-2">
                <div id="#DemoLe" className="bg-black-4 flex items-center align-middle justify-center min-h-[60vh] xl:min-h-[70vh] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 z-10">
                    <div className="relative text-center max-w-7xl mx-auto space-y-1">
                        <p className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-white/90 motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500">
                            DemoLe Ai
                        </p>
                    </div>
                </div>
                <div className="bg-black-4 flex items-center align-middle justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 z-10">
                    <img src={DemoLe} alt="DemoLe Ai" className="max-h-[60vh]" />
                </div>
            </div>
            <StarsBackground />
            <ShootingStars />
        </div>
    );
};

export default DemoLeHero;