/** @format */
import { Element } from "react-scroll";
import { Button } from "../button";
import { SectionHeader } from "../sectiton-header";
import { GoArrowRight } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

export const Member = () => {
  const members = [
    {
      img: "/img/man-1.webp",
      name: "Mark Zellers",
      title: "Founder & CEO",
    },
    {
      img: "/img/man-2.webp",
      name: "John Zellers",
      title: "Co-Founder",
    },
    {
      img: "/img/man-3.webp",
      name: "Kim Yun Son",
      title: "Engineering Manager",
    },
    {
      img: "/img/man-4.webp",
      name: "André Garcias",
      title: "Product Manager",
    },
    {
      img: "/img/man-5.webp",
      name: "Peter Lary",
      title: "UX Researcher",
    },
    {
      img: "/img/man-6.webp",
      name: "Henry Matt",
      title: "Customer Success",
    },
    {
      img: "/img/man-7.webp",
      name: "Natalia",
      title: "Lead of Fun",
    },
    {
      img: "/img/man-8.webp",
      name: "Larry",
      title: "Director of Joy",
    },
  ];

  return (
    <Element name='faq-section'>
      <div>
        <div className=' '>
          <div className='py-[80px] flex flex-col gap-10 md:max-w-5xl container'>
            <SectionHeader title='Our Executive Team'></SectionHeader>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-8  mt-[50px]'>
              {members.map((member) => (
                <div className=''>
                  <img src={member.img} alt='' className='block rounded-md' />

                  <div className='py-2  bg-white space-y-1'>
                    <h2 className='font-bold md:text-xl'>{member.name}</h2>
                    <p className='text-secondery/80 text-xs md:text-sm'>
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant='clear'
              className='mx-auto text-primary'
              icon={<GoArrowRight />}>
              More about us
            </Button>
          </div>
        </div>
        <Mistakes />
      </div>
    </Element>
  );
};

export const Mistakes = () => {
  return (
    <div className='md:container'>
      <div className='bg-fuchsia-100 rounded-md text-center  flex items-center py-[50px] justify-between overflow-hidden'>
        <div className='-ml-6 hidden md:block'>
          <img src='/img/cartoon-1.svg' alt='' />
        </div>
        <div className='space-y-7'>
          <SectionHeader
            title='Prevent costly mistakes'
            subtitle='Create pre-approved templates and lock all legal information.'></SectionHeader>
          <Button className='mx-auto px-7 py-6' icon={<MdArrowOutward />}>
            Try it now
          </Button>
          <p className='text-secondery/80'>
            14-day trial, no credit card required.
          </p>
        </div>
        <div className='hidden md:block -mr-8'>
          <img src='/img/cartoon-2.svg' alt='' />
        </div>
      </div>
    </div>
  );
};
