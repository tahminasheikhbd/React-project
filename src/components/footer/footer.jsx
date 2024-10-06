/** @format */

import { FooterUpperPart } from "./footer-1";
import { FooterLowerPart } from "./footer-2";
import { Element } from "react-scroll";

export const Footer = () => {
  return (
    <Element name='contact-section'>
      <div className='py-10  flex flex-col gap-10'>
        <FooterUpperPart />
        <hr className='bg-slate-500 h-[1px] my-4' />
        <FooterLowerPart />
      </div>
    </Element>
  );
};
