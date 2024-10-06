/** @format */

import { Button } from "../button";
import { FaCheckCircle } from "react-icons/fa";
export const MoneyPlans = () => {
  const plan = [
    {
      title: "Essentials",
      subtitle: "For creating impressive tools that generate results.",
      price: "$19 USD",
      seat: "No credit card required",
      heading: "Key features:",
    },
    {
      title: "Business",
      subtitle: "For seamless integrations and sending tools in bulk.",
      price: "$49 USD",
      seat: "Seat cost per month",
      heading: "Everything in Essentials, plus:",
    },
  ];
  const features1 = [
    "Real-time tracking and notifications",
    "Real-time analytics",
    "Drag and drop templates",
    "Project Management",
    "24/7 email and chat support",
  ];
  const features2 = [
    "CRM and Zapier integrations",
    "Content reporting",
    "Unlimited team workspaces",
    "Approval workflows",
    "Salesforce integration*",
  ];

  return (
    <div className='container max-w-4xl'>
      <div className='  border-2 rounded-2xl border-gray-200  flex overflow-hidden relative'>
        <div className='flex-1  space-y-8 p-10 bg-white'>
          <h2 className='text-2xl text-black font-bold'>Essentials</h2>
          <p>For creating impressive tools that generate results.</p>
          <div>
            <p className='text-4xl font-bold mb-1'>$19 USD</p>
            <p className='text-secondery/80'>Seat per month, 2 seats max</p>
          </div>

          <div>
            <Button className='!p-4 w-full grid place-items-center mb-1'>
              Start a free trial
            </Button>
            <p className='text-secondery/80 text-center'>
              No credit card required
            </p>
          </div>

          <h2 className='text-xl font-bold'>key features:</h2>
          <div className='flex flex-col gap-4  text-secondery '>
            {features1.map((features1) => (
              <div className='flex gap-2 items-center text-xs'>
                <div className='size-3 rounded-full text-primary'>
                  {<FaCheckCircle />}
                </div>
                <p className=''>{features1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* gray-part */}
        <div className='flex-1  space-y-8 p-10 bg-fuchsia-100 '>
          <h2 className='text-2xl text-black font-bold'>Business</h2>
          <p>For seamless integrations and sending tools in bulk..</p>
          <div>
            <p className='text-4xl font-bold mb-1'>$49 USD</p>
            <p className='text-secondery/80'>Seat cost per month</p>
          </div>

          <div>
            <Button className='!p-4 w-full grid place-items-center mb-1'>
              Start a free trial
            </Button>
            <p className='text-secondery/80 text-center'>Seat cost per month</p>
          </div>

          <h2 className='text-xl font-bold'>Everything in Essentials, plus:</h2>
          <div className='flex flex-col gap-4  text-secondery'>
            {features2.map((features2) => (
              <div className='flex gap-2 items-center text-xs'>
                <div className='size-3 rounded-full text-primary'>
                  {<FaCheckCircle />}
                </div>
                <p className='mt-auto'>{features2}</p>
              </div>
            ))}
          </div>
          <Button className='absolute -top-3 right-4 text-xs !p-3'>
            Popular
          </Button>
          <div>
            <img
              src='/img/taka-bundle.svg'
              alt=''
              className='absolute bottom-5 right-4 size-[120px] block'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
