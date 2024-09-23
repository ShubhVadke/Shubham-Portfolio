/**
 * @copyright 2024 shubhamvadkedev
 * @licence Apache-2.0
 */

/**
 * NODE MODULES
 */
import { useState } from "react";

/**
 * COMPONENTS
 */
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-950 to-zinc-900/0">
      <div className="max-w-screen-xl w-full mx-auto px-4 flex justify-between items-center md:px-18 md:grid md:grid-cols-[60fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/icon.png"
              width={48}
              height={48}
              alt="Shubham Vadke"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-end">
          <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>
        {/* 
        <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
          Contact Me
        </a> */}

      </div>
    </header>
  );
};

export default Header;
