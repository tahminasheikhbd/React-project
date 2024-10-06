/** @format */
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { Button } from "../button";
import { IoEarth } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export const FooterLowerPart = () => {
  return (
    <div className='container flex flex-col md:flex-row md:justify-between gap-4 py-[50px] '>
      <div className='md:min-h-[100px] md:self-start  text-center md:text-start space-y-2'>
        <p className='text-secondery/70'>Lexend © 2024, All rights reserved.</p>
        <ul className='flex gap-6 font-bold justify-center'>
          <li>Privacy</li>
          <li>Legal</li>
          <li>Cookie settings</li>
        </ul>
      </div>
      <ul className='md:min-h-[100px] mt-auto   flex gap-4 md:gap-6 md:items-end justify-center items-center'>
        <li>
          <a href='#'>
            <FaLinkedin className='size-[25px]' />
          </a>
        </li>
        <li>
          <a href=''>
            <FaFacebookSquare className='size-[25px]' />
          </a>
        </li>
        <li>
          <a href=''>
            <RiTwitterXFill className='size-[25px]' />
          </a>
        </li>
        <li>
          <a href=''>
            <IoLogoInstagram className='size-[25px]' />
          </a>
        </li>
        <li>
          <a href=''>
            <FaYoutube className='size-[25px]' />
          </a>
        </li>
        <h2 className='bg-gray-300 h-5 md:h-6 w-[1px] '></h2>
        <Button
          className='font-bold !text-black flex items-center !p-0'
          variant='clear'>
          {<IoEarth />} English{<IoIosArrowDown />}
          {<IoIosArrowDown /> && (
            <ul className='py-6 px-10 bg-pink-300 rounded-lg font-semibold text-center space-y-3 hidden transition'>
              <li>Bangla</li>
              <li>English</li>
              <li>Hindi</li>
            </ul>
          )}
        </Button>
      </ul>
    </div>
  );
};
