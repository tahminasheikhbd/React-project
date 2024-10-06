/** @format */

export const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className='w-full max-w-2xl mx-auto text-center flex flex-col items-center gap-4'>
      <h2 className='text-3xl md:text-5xl font-bold whitespace-nowrap mb-3'>
        {title}
      </h2>
      {subtitle && <p className='text-secondery/80'>{subtitle}</p>}
    </div>
  );
};
