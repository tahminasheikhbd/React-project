/** @format */

import { Button } from "../button";

// export const NavCta = () => {
//   return (
//     <div className='flex items-center gap-2'>
//       <Button variant='clear'>Login</Button>
//       <Button className='px-'>Start with trial</Button>
//     </div>
//   );
// };

export const NavCta = () => {
  return (
    <div className='flex items-center gap-2'>
      <Button variant='clear' className='bg-indigo-700'>
        Login
      </Button>
      <Button className='px-4 '>Start with trial</Button>
    </div>
  );
};
