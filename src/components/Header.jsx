import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/MenuSvg";
import { HamburgerMenu } from "../design/HamburgerMenu"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-gray-900 lg:bg-black/70 lg:backdrop-blur-md ${openNavigation ? "bg-black" : "bg-black/70 backdrop-blur-md"
                }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="/">
                    <h3 className="text-white text-2xl font-semibold">HERMEiAS</h3>
                </a>
                <nav
                    className={`${openNavigation ? "flex" : "hidden"
                        } fixed top-[5rem] left-0 right-0 bottom-0 bg-black/95 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-gray-500 transition-colors ${openNavigation ? "hover:text-white motion-scale-x-in-150 motion-blur-in-xl motion-duration-300" : ""} ${item.onlyMobile ? "lg:hidden" : ""
                                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash
                                        ? "z-2 lg:text-white"
                                        : "lg:text-white/50"
                                    } lg:leading-5 lg:hover:text-white xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <a
                    href="#signup"
                    className="button hidden mr-8 text-white/50 transition-colors hover:text-white lg:block"
                >
                    New account
                </a>
                <div className="hidden lg:flex">
                    <Button white href="#signin">SIGN IN</Button>
                </div>

                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;