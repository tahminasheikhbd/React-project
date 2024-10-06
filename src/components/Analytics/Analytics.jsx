/** @format */

import { Button } from "../button";
import { SectionHeader } from "../sectiton-header";
import { Simple, SimpleAnalysis } from "./simple";
import { Card } from "./white-card";
import { GoArrowRight } from "react-icons/go";
import { Element } from "react-scroll";
export const Analytics = () => {
  return (
    <Element name='analytics-section'>
      <section className='bg-purple-100 flex flex-col gap-10 py-10'>
        <SectionHeader
          title='Boost your efficiency with integrations'
          subtitle='Connect every part of your business with integrations that will simplify your workflow.'></SectionHeader>
        <Card />
        <Button
          variant='clear'
          icon={<GoArrowRight />}
          className='!p-0 text-primary grid col-span-3  mx-auto !font-bold mb-[150px]'>
          Explore all integrations
        </Button>
        <SectionHeader title='Our Values it’s Simple!' />

        <Simple />
      </section>
    </Element>
  );
};
