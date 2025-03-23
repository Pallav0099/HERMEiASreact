'use client'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from "@react-three/fiber";
import DemoLePhone from "../design/DemoLePhone";
import { Spotlight } from "../design/Spotlight";
import { StarsBackground } from "../design/StarsBackground";
import { ShootingStars } from "../design/ShootingStars";
import { TextGenerateEffect } from "../design/TextGenerateEffect";

const DemoLeHero = () => {
    // Get the overall scroll progress
    const { scrollYProgress } = useScroll();
    const [words, setWords] = useState("Democratizing Legal Assistance");

    {/**  DEV NOTES
    Create a transform for the canvas container's Y translation.
    Here we keep it at 0% until scrollYProgress is 0.5, then smoothly move it up.
    Adjust the range values ("0%", "-100%") as needed for your effect. */}

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            if (latest >= 0.3) {
                setWords('Blah Blah Blah Blah Blah Lorem Ipsum');
            } else {
                setWords('Democratizing Legal Assistance');
            }
        });
    }, [scrollYProgress]);

    const translateY = useTransform(
        scrollYProgress,
        [0.5, 0.7], // change these values for when the transition should occur
        ["0%", "-40%"]
    );

    return (
        <div className="w-full lg:px-15 overflow-hidden mb-40 min-h-[150vh] sticky top-[5rem]">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Spotlight />
            </div>
            <motion.div style={{ translateY }} className="grid grid-cols-1 md:grid-cols-2 overflow-visible">
                <div className="order-2 md:order-1 flex items-center align-middle justify-center max-w-7xl mx-auto space-y-1 md:pl-[7vw] xl:pl-[10vw]">
                    <TextGenerateEffect
                        key={words}
                        words={words}
                        duration={1.5}
                        delay={0.3}
                        className="text-center md:text-left text-3xl lg:text-4xl xl:text-6xl font-semibold text-white/90 motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500"
                    />
                </div>
                <div
                    className="order-1 md:order-2 min-h-[70vh]"
                >
                    <Canvas>
                        <DemoLePhone shadows />
                    </Canvas>
                </div>
            </motion.div>
            <StarsBackground />
            <ShootingStars />
        </div>
    );
};

export default DemoLeHero;
