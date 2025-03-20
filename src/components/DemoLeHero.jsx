import { Spotlight } from "../design/Spotlight";
import { StarsBackground } from "../design/StarsBackground";
import { ShootingStars } from "../design/ShootingStars";
import { TextGenerateEffect } from "../design/TextGenerateEffect";
import PhoneLeft from '../assets/PhoneLeft.png';
import PhoneRight from '../assets/PhoneRight.png';

const HeroText = 'Democratizing Legal Assistance.';

const DemoLeHero = () => {
    return (
        <div className="relative top-[5rem] w-full lg:px-15 overflow-hidden mb-40">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Spotlight />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-5">
                <div className="flex items-center justify-center align-middle text-center max-w-7xl mx-auto space-y-1">
                    <TextGenerateEffect words={HeroText} duration={1.5} delay={0.3} className="text-3xl lg:text-4xl xl:text-6xl font-semibold text-white/90 motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500" />
                </div>
                <div className="order-1">
                    <div className="grid">
                        <div className="row-start-1 col-start-1">
                            <img src={PhoneLeft} alt="Phone Left" className="motion-preset-slide-up-md motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500" />
                        </div>
                        <div className="row-start-1 col-start-1">
                            <img src={PhoneRight} alt="Phone Left" className="motion-preset-slide-up-md motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500 motion-delay-500" />
                        </div>
                    </div>
                </div>
            </div>
            <StarsBackground />
            <ShootingStars />
        </div>
    );
};

export default DemoLeHero;