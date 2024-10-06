/** @format */

export const Simple = () => {
  const simple = [
    {
      img: "img/value-1.svg",
      title: "Make an impact",
      desc: "We’re building something big. Something that has the power to change the trajectory of any sized business for the better.",
    },
    {
      img: "img/value-2.svg",
      title: "Learn",
      desc: "Teams are masters of their craft though we’re all experts in our respective fields, we always make time to expand our minds.",
    },
    {
      img: "img/Value-3.svg",
      title: "Empathy",
      desc: "We strive to be empathetic to every customer and colleague and by doing so we provide a better experience for all.",
    },
  ];

  return (
    <div className='flex flex-col gap-6 container  max-w-5xl'>
      <div className=' grid grid-cols-2 md:grid-cols-3  gap-6'>
        {simple.map((simple) => (
          <div className='px-6 py-10 h-full  rounded-lg bg-white flex flex-col gap-3 place-items-center mx-auto'>
            <div>
              <img src={simple.img} alt='' className='block' />
            </div>
            <h2 className='font-bold text-black text-2xl whitespace-nowrap mb-3'>
              {simple.title}
            </h2>
            <p className='text-secondery/80 text-center'>{simple.desc}</p>
          </div>
        ))}
      </div>
      <SimpleAnalysis />
    </div>
  );
};

export const SimpleAnalysis = () => {
  const SimpleAnalysis = [
    {
      title: "2014",
      desc: "Lexend founded",
    },
    {
      title: "50",
      desc: "Hardworking group",
    },
    {
      title: "4600",
      desc: "Document workflows",
    },
    {
      title: "17%",
      desc: "Taux convertion",
    },
  ];
  return (
    <div className=''>
      <div className=' bg-white w-full  py-[100px] px-[20px] rounded-lg gap-2 grid grid-cols-2 md:grid-cols-4 col-span-3'>
        {SimpleAnalysis.map((simpleAnalysis) => (
          <div className=' grid place-items-center  space-y-4  p-3'>
            <h2 className='text-black text-5xl font-bold md:text-7xl '>
              {simpleAnalysis.title}
            </h2>
            <p className='text-secondery/80'>{simpleAnalysis.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
