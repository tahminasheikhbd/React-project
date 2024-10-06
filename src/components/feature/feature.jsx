/** @format */

import { FeatureTabs } from "../feature-tabs";
import { SectionHeader } from "../sectiton-header";
import { Element } from "react-scroll";

export const FeatureSection = () => {
  return (
    <Element name='features-section'>
      <section className='flex flex-col gap-8 mt-12'>
        <SectionHeader
          title='Smart features for your business'
          subtitle='We focus on helping you to make useful content more accessible with an utlimate goal for a good sharing profit as a content creator.'
        />
        <FeatureTabs />
      </section>
    </Element>
  );
};
