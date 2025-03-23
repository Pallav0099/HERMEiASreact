import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Iphone16 } from '../assets/DemoLe-Assets/Iphone16';
import { useScroll, useTransform } from 'motion/react';


const Scene = () => {
    const { camera } = useThree()
    const { scrollYProgress } = useScroll()

    const x = useTransform(scrollYProgress, [0, 1], [-6.92, -9.108493862362037]);
    const y = useTransform(scrollYProgress, [0, 1], [-0.0057, 0.1872756154044498]);
    const z = useTransform(scrollYProgress, [0, 1], [5.92, 0.016352467306954218]);


    useFrame(() => {
        const xPos = x.get()
        const yPos = y.get()
        const zPos = z.get()
        camera.position.set(xPos, yPos, zPos)
        camera.lookAt(0, 0, 0)
    })

    return (
        <>
            <PerspectiveCamera makeDefault fov={45} />
            <Environment preset='city' />
            <Iphone16 />
        </>
    );
};
export default Scene;