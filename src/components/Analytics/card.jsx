/** @format */
import { Button } from "../button";
import { GoArrowRight } from "react-icons/go";

export const CardStyle = () => {
  const cardStyle = [
    {
      title: "Slack",
      subtitle: "Productivity",
      desc: "Notify your teammates of the latest activities with instant Slack messages.",
      img: "/img/logo-1.svg",
    },
    {
      title: "Salesforce",
      subtitle: "CRM",
      desc: "Leave a lasting impression all done inside Salesforce CPQ platform.",
      img: "/img/logo-2.svg",
    },
    {
      title: "Stripe",
      subtitle: "Payment",
      desc: "Collect credit card and ACH payments within your sales documents.",
      img: "/img/logo-3.svg",
    },
    {
      title: "PayPal",
      subtitle: "Payment",
      desc: "Provide a world-class checkout experience for your customers.",
      img: "/img/logo-4.svg",
    },
    {
      title: "HubSpot",
      subtitle: "CRM",
      desc: "Expand the ROI from your CRM and unlock easy generation and capabilities.",
      img: "/img/logo-5.svg",
    },
    {
      title: "Zapier",
      subtitle: "Integration platforms",
      desc: "Create custom, automated workflows using your favorite Zaps.",
      img: "/img/logo-6.svg",
    },
  ];
  return (
    <div className='container grid grid-cols-2 md:grid-cols-3  gap-6 max-w-5xl'>
      {cardStyle.map((card, idx) => (
        <div className='bg-white p-6 rounded-md flex flex-col h-full  gap-5'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='font-bold text-xl text-black'>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
            <img src={card.img} />
          </div>
          <p className='text-secondery/80'>{card.desc}</p>
          <Button
            variant='clear'
            className='!p-0 text-primary mt-auto '
            icon={<GoArrowRight />}>
            Explore
          </Button>
        </div>
      ))}
    </div>
  );
};
