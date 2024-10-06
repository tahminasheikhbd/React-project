/** @format */
import { Button } from "./button";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
export const FeatureTabs = () => {
  const tabOptions = [
    {
      label: "Audit Trial",
      title: "Share tools quickly and confidently in minutes",
      desc: "This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.",
      img: "./img/audit.webp",
    },
    {
      label: "Tool Workflow",
      title: "Connect every part of your entire business",
      desc: "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.",
      img: "./img/workflow.webp",
    },
    {
      label: "Control your Apps",
      title: "Review quickly and confidently",
      desc: "Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
      img: "./img/control.webp",
    },
    {
      label: "Approvals",
      title: "Connect every part of your entire business",
      desc: "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.",
      img: "./img/approval.webp",
    },
  ];
  const [position, setPosition] = useState(0);
  return (
    <div className='flex flex-col gap-8 container max-w-5xl mb-12'>
      <ul className='bg-orange-100 px-4 rounded-xl flex items-center'>
        {tabOptions.map((tab, idx) => (
          <li
            className={`flex-1 font-medium text-center text-secondery text-lg py-6 relative before:absolute before:left-0 before:bottom-0 before:h-1 before:w-full before:bg-primary before:transition cursor-pointer ${
              position == idx ? "before:scale-100" : "before:scale-0"
            }`}
            key={idx}
            onClick={() => setPosition(idx)}>
            {tab.label}
          </li>
        ))}
      </ul>
      <div className='flex items-center gap-4'>
        <div className='flex-1'>
          <img src={tabOptions[position].img} alt='' className='rounded-2xl' />
        </div>

        <div className='flex-1 space-y-4'>
          <h3 className='text-3xl font-bold text-secondery'>
            {tabOptions[position].title}
          </h3>
          <p className='text-secondery/80 leading-normal'>
            {tabOptions[position].desc}
          </p>
          <Button
            variant='clear'
            className='!p-0 !text-primary'
            icon={<GoArrowRight />}>
            Let&apos; find out
          </Button>
        </div>
      </div>
    </div>
  );
};
