/** @format */

export const Reviews = () => {
  const reviews = [
    {
      icon: "/img/icon-1.svg",
      desc: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
      img: "/img/sm-1.webp",
      name: "Mark Zellers",
      title: "CEO, Co-Founder",
    },
    {
      icon: "/img/icon-2.svg",
      desc: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
      img: "/img/sm-2.webp",
      name: "Natalia Larsson",
      title: "Director of Sales",
    },
    {
      icon: "/img/icon-3.svg",
      desc: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
      img: "/img/sm-3.webp",
      name: "Sarah Edrissi",
      title: "Lead Marketing",
    },
    {
      icon: "/img/icon-4.svg",
      desc: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
      img: "/img/sm-4.webp",
      name: "Mark Zellers",
      title: "Senior UI/UX Designer",
    },
    {
      icon: "/img/icon-5.svg",
      desc: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
      img: "/img/sm-1.webp",
      name: "Mark Zellers",
      title: "CEO, Co-Founder",
    },
    {
      icon: "/img/icon-6.svg",
      desc: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
      img: "/img/sm-2.webp",
      name: "Mark Zellers",
      title: "CEO, Co-Founder",
    },
    {
      icon: "/img/icon-7.svg",
      desc: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
      img: "/img/sm-3.webp",
      name: "Mark Zellers",
      title: "CEO, Co-Founder",
    },
    {
      icon: "/img/icon-8.svg",
      desc: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
      img: "/img/sm-4.webp",
      name: "Mark Zellers",
      title: "CEO, Co-Founder",
    },
  ];

  return (
    <div className='container max-w-5xl grid grid-cols-2 gap-6 mt-[100px]'>
      {reviews.map((reviews) => (
        <div className='border  rounded-lg bg-white overflow-hidden p-10 flex flex-col gap-5'>
          <div>
            <img src={reviews.icon} alt='' className='w-[120px]' />
          </div>

          <p className='text-secondery/80 mb-[30px] leading-relaxed'>
            {reviews.desc}
          </p>
          <div className='flex gap-2 items-center'>
            <div>
              <img
                src={reviews.img}
                alt=''
                className='rounded-full  object-cover size-[50px]'
              />
            </div>
            <div className='space-y-1'>
              <h2 className='font-bold '>{reviews.name}</h2>
              <p className='text-secondery/80 text-sm'>{reviews.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
