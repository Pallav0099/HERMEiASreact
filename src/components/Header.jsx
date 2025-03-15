import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/MenuSvg";
import { HamburgerMenu } from "../design/HamburgerMenu"
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const pathname = useLocation().pathname;
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
        } else {
            setOpenNavigation(true);
        }
    };

    const handleClick = () => {
        setOpenNavigation(false);
    };
    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-gray-700 lg:bg-black/90 lg:backdrop-blur-sm ${openNavigation ? "bg-black" : "bg-black/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 sm:pb-0">
                <a className="block w-[12rem] xl:mr-8" href="hero">
                    <h3 className="text-white text-2xl font-semibold">HERMEiAS</h3>
                </a>
                <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-black lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a key={item.id} href={item.url} onClick={handleClick} className={'block relative font-code text-2xl uppercase text-gray-500 transition-colors hover:text-white $ {item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-white" : "lg:text-neutral-500"} lg:leading-5 lg:hover:text-white '}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                <a href="#signup" className="button uppercase hidden mr-8 text-white/50 transition-colors hover:text-white lg:block">Sign Up</a>
                <div className="hidden lg:flex">
                    <Button href="#signin">Sign In</Button>
                </div>
                <button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation}/>
                </button>
                
            </div>
        </div>

    );
};

export default Header;