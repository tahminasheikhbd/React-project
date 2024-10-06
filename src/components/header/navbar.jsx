/** @format */

import { Link } from "react-scroll";
import { navlinks } from "../../constants";

export const Navbar = () => {
  return (
    <ul className='flex items-center gap-8'>
      {navlinks.map((link) => (
        <Link
          activeClass='bg-primary'
          className='font-medium text-xl text-secondery hover:text-primary transition cursor-pointer'
          key={link.href}
          to={link.href}
          smooth
          offset={-80}>
          {link.label}
        </Link>
      ))}
    </ul>
  );
};
