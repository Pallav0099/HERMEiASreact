import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Iphone16 } from '../assets/DemoLe-Assets/Iphone16';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DemoLePhone = ({ progress }) => {
    const cameraRef = useRef(null);
    useFrame(() => {
        console.log(cameraRef.current.position)
        cameraRef.current.lookAt(0, 0, 0)
    })

    useEffect(() => {
        const updateCameraPosition = () => {
            const positions = [[-6.92, -0.0057, 5.92],
            [-9.108493862362037, 0.1872756154044498, 0.016352467306954218],];
            if (progress >= 1) {
                gsap.to(cameraRef.current.position, {
                    x: -8.198542849248927,
                    y: 0.5122226930961125,
                    z: -0.26614555231425535,
                    duration: .5,
                    ease: 'power1.out'
                });
            }
            else {
                gsap.to(cameraRef.current.position, {
                    x: -6.92,
                    y: -0.0057,
                    z: 5.92,
                    duration: .5,
                    ease: 'power1.out'
                });
            }
        };
        updateCameraPosition()
    }, [progress, cameraRef.current]);
    return (
        <>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                fov={45}
                near={.1}
                far={10000}
                position={[-6.92, -0.0057, 5.92]}

            />
            <Environment preset='city' />
            <Iphone16 />
        </>
    );
};
export default DemoLePhone;