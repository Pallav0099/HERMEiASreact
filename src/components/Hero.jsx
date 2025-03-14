import svg from "../assets/react.svg";

const Hero = () => {
    return (
        <div className="bg-black-4 grid grid-cols-2 items-center px-10">
            {/* Left Side */}
            <div className="text-left">
                <p className="text-8xl font-bold text-white ml-30 mt-85">Hermeias</p>
                <p className=" text-2xl text-white py-2 ml-32">Open and Private.</p>
            </div>

            {/* Right Side */}
            <div className="flex justify-end mr-30 mt-20">
                <img src={svg} alt="Hero" className="w-40" />
            </div>
        </div>
    );
};

export default Hero;
