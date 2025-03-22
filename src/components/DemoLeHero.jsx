import { Spotlight } from "../design/Spotlight";
import { StarsBackground } from "../design/StarsBackground";
import { ShootingStars } from "../design/ShootingStars";
import { TextGenerateEffect } from "../design/TextGenerateEffect";
import { useState, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import DemoLePhone from "../design/DemoLePhone";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DemoLeHero = () => {
    const mainRef = useRef(null);
    const phoneRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [heroText, setHeroText] = useState('Democratizing Legal Assistance.');
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "50vh",
                scrub: 1,
                onUpdate: (self) => {
                    setProgress(self.progress);
                    if (self.progress >= 1) {
                        setHeroText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam, vel volutpat quam maximus.")
                    } else {
                        setHeroText("Democratizing Legal Assistance");
                    }
                }
            }
        })
            .to(phoneRef.current, {
                ease: "none",
                x: '0',
                y: "0"
            });
    }, []);

    return (
        <div ref={mainRef} className="sticky top-[5rem] w-full lg:px-15 overflow-hidden mb-40">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Spotlight />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-2 md:order-1 flex items-center justify-center align-middle text-center max-w-7xl mx-auto space-y-1">
                    <TextGenerateEffect
                        key={heroText}
                        words={heroText}
                        duration={1.5}
                        delay={0.3}
                        className="text-3xl lg:text-4xl xl:text-6xl font-semibold text-white/90 motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500"
                    />
                </div>
                <div className="grid order-1 md:order-2 min-h-[70vh]">
                    <Canvas>
                        <DemoLePhone progress={progress} className="motion-preset-slide-up-md motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500 motion-delay-500" />
                    </Canvas>
                </div>
            </div>
            <StarsBackground />
            <ShootingStars />
        </div>
    );
};

export default DemoLeHero;
