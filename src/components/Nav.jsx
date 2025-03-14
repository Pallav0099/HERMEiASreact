import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = ({ closeMenu }) => {
  return (
    <>
      <NavLink to="/" onClick={closeMenu}>Home</NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="hidden justify-between md:flex">
          <NavLinks closeMenu={closeMenu} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} aria-expanded={isOpen}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="p-4">
            <NavLinks closeMenu={closeMenu} />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
