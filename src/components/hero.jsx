/** @format */
import { Button } from "./button";
import { Element } from "react-scroll";
export const Hero = () => {
  return (
    <Element name='hero-section'>
      <section>
        <div className='bg-black text-white pb-[150px] pt-20 '>
          <div className='container '>
            <div className='w-full max-w-xl mx-auto py-16  space-y-8 flex items-center justify-center flex-col '>
              <h1 className='text-4xl  text-center font-bold leading-snug'>
                Easy project managment of any complexity
              </h1>
              <Button className='px-10 py-[18px]'>Try it out</Button>
            </div>
          </div>
        </div>
        <div className='container relative -mt-40'>
          <img src='img/hero-cover.webp' alt='' className='rounded-3xl' />
        </div>
      </section>
    </Element>
  );
};
