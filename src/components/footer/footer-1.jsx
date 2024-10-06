/** @format */
export const FooterUpperPart = () => {
  const Column1 = () => {
    const column1 = [
      "About",
      "Pricing",
      "Features",
      "Integrations",
      "Career",
      "Contact",
      "Contact v2",
    ];
    return (
      <>
        {column1.map((li) => (
          <li>{li}</li>
        ))}
      </>
    );
  };

  const Column2 = () => {
    const column2 = [
      "Shop",
      "PWith sidebar",
      "Product detail",
      "Product detail v2",
      "Cart",
      "Checkout",
      "Order confirmation",
    ];
    return (
      <>
        {column2.map((li) => (
          <li>{li}</li>
        ))}
      </>
    );
  };

  const Column3 = () => {
    const column3 = [
      "Request a demo",
      "Sign in",
      "Sign in v2",
      "Sign up",
      "Sign up v2",
      "Reset password",
      "Reset password v2",
    ];
    return (
      <>
        {column3.map((li) => (
          <li>{li}</li>
        ))}
      </>
    );
  };

  const Column4 = () => {
    const column4 = [
      "Blog",
      "Blog detail",
      "FAQ",
      "404",
      "Coming Soon",
      "Terms of service",
      "Privacy policy",
    ];
    return (
      <>
        {column4.map((li) => (
          <li>{li}</li>
        ))}
      </>
    );
  };

  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-[50px] container md:items-center'>
      <div className='flex flex-col gap-6 flex-1 pr-4 md:pr-6 max-w-[350px]'>
        <div>
          <img src='/img/footer-logo.svg' alt='' />
        </div>
        <p>
          This powerfull tool eliminates the need to leave Salesforce to get
          things done as I can create a custom proposal with dynamic pricing
          tables.
        </p>
        <div className='flex items-center gap-2'>
          <button>
            <img src='img/footer-1.svg' alt='' />
          </button>
          <button>
            <img src='img/footer-2.svg' alt='' />
          </button>
        </div>
      </div>

      {/* column-part */}
      <div className='grid grid-cols-2 md:grid-cols-4 flex-1 gap-8 md:gap-5'>
        <ul className=' space-y-2 font-semibold hover:text-secondery/70 pr-4 '>
          <Column1 />
        </ul>
        <ul className=' space-y-2 font-semibold hover:text-secondery/70 pr-4 '>
          <Column2 />
        </ul>
        <ul className=' space-y-2 font-semibold hover:text-secondery/70 pr-4 '>
          <Column3 />
        </ul>
        <ul className=' space-y-2 font-semibold hover:text-secondery/70 pr-4 '>
          <Column4 />
        </ul>
      </div>
    </div>
  );
};
