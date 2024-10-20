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

 {/* Background for screens ipro 1024 */}
        <div
          className="absolute inset-0 hidden ipr:block  sm:hidden md:hidden  bg-cover bg-center"
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



 {/* Background for screens ipad landscape 1024 */}
 <div
          className="absolute inset-0 hidden ipr:hidden mil:block  sm:hidden md:hidden  bg-cover bg-center"
          style={{  
            backgroundImage: `url('/images/desktop-background.jpg')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>


        
        
        
        

        {/* Content Container */}
        <div className="relative z-10 text-darkGreyColor flex flex-col items-center lg:items-start text-left max-w-sm lg:max-w-lg pb-20 bottom-12 lg:right-48 xl:right-52 
        md:ml-[200px] ip:ml-[0px] ipr:ml-[-200px] ml:ml-[250px] ml:my-[-50px]
        2xl:right-64 2xl:bottom-20  xl-2:right-96 xl-2:bottom-44">
          <h1 className="text-3xl md-lg:ml-[10px] lg:text-5xl xl:text-6xl xl-2:text-7xl ip:text-5xl ipr:ml-[-200px] ipr:text-[60px] sm:text-5xl ip:mt-[-200px] ia:mt-[-200px] md:text-4xl font-bold mb-4 ">Cloud Shapers</h1>
          <p className="md:text-lg md-lg:ml-[-30px] lg:text-xl mb-7 xl-2:text-3xl ipr:ml-[-190px] ipr:text-[35px] ip:text-2xl sm:text-2xl ">Imagine the future, then build it</p>
          <h1 className='md:font-light'>

          </h1>
          <ContactFormDialog />
        </div>
      </div>
    </>
  );
};

export default Index;
