/** @format */

// export const Button = ({ children, variant, className }) => {
//   let btnClass;

//   switch (variant) {
//     case "clear":
//       btnClass = "bg-transparent text-secondery hover:text-secondery";
//       break;

//     case "secondery":
//       btnClass = "bg-secondery text-white hover:bg-zinc-700";
//       break;
//     default:
//       btnClass = "bg-primary text-white hover:bg-primary-hover";
//       break;
//   }

//   return (
//     <button
//       className={`px-8 rounded-md py-3 leading-none font-medium ${btnClass} ${className}`}>
//       {children}
//     </button>
//   );
// };
export const Button = ({ children, variant, className, icon }) => {
  let btnClass;
  switch (variant) {
    case "clear":
      btnClass = "!bg-transparent text-xl hover:text-secondery/60";
      break;
    case "secondery":
      btnClass = "bg-secondery text-white hover:bg-secondery/80";
      break;
    default:
      btnClass = "bg-primary text-white hover:bg-primary-hover";
      break;
  }

  return (
    <button
      className={`px-4 py-3 rounded-md leading-none font-medium  ${className} ${btnClass}`}>
      <span className='flex items-center gap-2'>
        {children}
        {icon}
      </span>
    </button>
  );
};
