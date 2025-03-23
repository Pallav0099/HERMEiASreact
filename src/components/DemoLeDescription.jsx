import { Canvas } from "@react-three/fiber";
import Scene from "../design/Scene";
const DemoLeDescription = () => {
    return (
        <section id="about" className="min-h-[150vh]">
            <div className="mx-auto max-w-7xl">
                <Canvas>
                    <Scene />
                </Canvas>
            </div>
        </section>
    );
};

export default DemoLeDescription;