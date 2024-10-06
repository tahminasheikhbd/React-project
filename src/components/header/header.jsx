/** @format */

import { NavCta } from "./nav-cta";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className='fixed z-10 left-0 right-0 top-0 h-20 flex items-center bg-white/80 backdrop-blur-sm'>
      <div className='container flex items-center justify-between  '>
        <img src='./img/logo.svg' alt='' />
        <Navbar />
        <NavCta />
      </div>
    </header>
  );
};
