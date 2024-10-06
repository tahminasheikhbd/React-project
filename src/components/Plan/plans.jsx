/** @format */
import { Element } from "react-scroll";
import { Button } from "../button";
import { SectionHeader } from "../sectiton-header";
import { MoneyPlans } from "./money-plan";
import { GoArrowRight } from "react-icons/go";
import { Reviews } from "./review";
import { Member, Mistakes } from "./member";
export const Plan = () => {
  return (
    <Element name='Plans-section'>
      <div className=' flex flex-col gap-10 py-10'>
        <SectionHeader
          title='Price plans as per your needs'
          subtitle='No extra charges. No hidden fees.'
        />
        <MoneyPlans />
        <Button
          variant='clear'
          className='mx-auto text-primary mb-[70px]'
          icon={<GoArrowRight />}>
          More detailed pricing
        </Button>
        <SectionHeader
          title='Don’t just take our words'
          className='!mb-[200px]'></SectionHeader>
        <Reviews />
        <Button
          className='mx-auto !text-primary'
          variant='clear'
          icon={<GoArrowRight />}>
          See all feedbacks
        </Button>
        <Member />
      </div>
    </Element>
  );
};
