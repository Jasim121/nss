import React from 'react';
import { ContactFormDialog } from './ContactFormDialog';

const Index = () => {
  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col justify-end items-center lg:items-end overflow-hidden">
        {/* Background for Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:hidden"
          style={{
            backgroundImage: `url('/images/mobile.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>


        {/* Background for screens between 1025px to 1300px */}
        <div
          className="absolute inset-0 hidden lg:block xl:hidden bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/desktop-background.jpg')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Background for screens above 1300px */}
        <div
          className="absolute inset-0 hidden xl:block bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/desktop-background.jpg')`,  
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width:`100%`
          }}
        ></div>

        {/* Background for screens mobile landscape */}
        <div
          className="absolute inset-0 hidden md:block lg:hidden xl:hidden md-lg:hidden xl-2:hidden bg-cover bg-center"
          style={{  
            backgroundImage: `url('/images/mobile-landscape.png')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

         {/* Background for screens ipad 768 */}
         <div
          className="absolute inset-0 hidden sm:block md:hidden lg:hidden xl:hidden md-lg:hidden xl-2:hidden bg-cover bg-center"
          style={{  
            backgroundImage: `url('/images/ipad.png')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

         {/* Background for screens ipro 820 */}
         <div
          className="absolute inset-0 hidden ip:block sm:hidden md:hidden lg:hidden xl:hidden md-lg:hidden xl-2:hidden bg-cover bg-center"
          style={{  
            backgroundImage: `url('/images/ipro.png')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>


         {/* Background for mobile landscape 844 */}
         <div
          className="absolute inset-0 hidden ml:block ipr:hidden  sm:hidden md:hidden  bg-cover bg-center"
          style={{  
            backgroundImage: `url('/images/mobile-landscape.png')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} 
        ></div>



                 {/* Background for screens ipad pro ipm landscape 1024 */}
                 <div
          className="absolute inset-0 hidden  il:block  sm:hidden md:hidden  bg-cover bg-center"
          style={{  
            backgroundImage: `url('/images/ipadlandscape.jpg')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>




                 {/* Background for screens ipad pro m landscape 1024 */}
 <div
          className="absolute inset-0 hidden  ipm:block  sm:hidden md:hidden  bg-cover bg-center"
          style={{  
            backgroundImage: `url('/images/ipad.jpg')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        
        
        

        {/* Content Container */}
        <div className="relative z-10 text-darkGreyColor flex flex-col items-center lg:items-center text-center max-w-sm lg:max-w-lg pb-20 bottom-12 lg:right-48 xl:right-52 
        md:ml-[200px] ip:ml-[0px]  ipr:my-[100px] ml:ml-[250px] ml:my-[-50px]
        2xl:right-64 2xl:bottom-20 md:ms-[300px]  xl-2:right-96 xl-2:bottom-44">
          <h1 className="text-[60px] xs:text-[35px] sm:text-[50px] ipr:text-[50px] md:text-[26px]">Cloud Shapers</h1>
          <p className="text-[20px] mx-14 xs:text-[18px] sm:text-[19px]  ipr:text-[20px] md:text-[11px]">Imagine the future, then build it</p>
          <h1 className='md:font-light'>

          </h1>
          <ContactFormDialog />
        </div>
      </div>
    </>
  );
};

export default Index;
