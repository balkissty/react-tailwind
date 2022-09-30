import React from 'react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({top:0, left:0, behavior: 'smooth'
    })
  }
  return (
    <>
      <footer className="mt-10 bg-black text-white py-10 px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:gap-20 lg:gap-40">
          <div className="text-center">
            <div className="text-1xl mb-4 font-bold font-['Montserrat']">
              <p className="font-normal">Bonnie's</p>
              <p className="tracking-[.5em]">Flair</p>
            </div>
            <p className="max-w-sm mx-auto text-center">
              Get all your eye wears at a discounted price and also win gifts
              while shopping.
            </p>
            <button className="bg-white text-black p-3 rounded-lg my-4" >Contact Sales</button>
          </div>
          {/* <div className="">
            <p className="text-2xl md:text-1xl font-semibold mb-4">QUICK LINKS</p>
            <ul className="text-base">
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Categories</li>
              <li className='cursor-pointer'>Contact Us</li>
            </ul>
          </div> */}
          {/* <div className='flex justify-between md:block'>
            <button className="text-1xl bg-white text-black px-4 py-3 rounded-lg uppercase font-semibold">
              Shop Now
            </button>
            <button className='flex md:hidden bg-white p-3 rounded-lg' onClick={scrollToTop}>
              <svg className='w-8 h-8' viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6234 1.72713C19.6471 0.750824 18.0642 0.750824 17.0879 1.72713L1.178 17.637C0.201686 18.6133 0.201686 20.1963 1.178 21.1726C2.15431 22.1489 3.73722 22.1489 4.71353 21.1726L18.8557 7.03044L32.9978 21.1726C33.9741 22.1489 35.557 22.1489 36.5333 21.1726C37.5096 20.1963 37.5096 18.6133 36.5333 17.637L20.6234 1.72713ZM21.3557 36.2166L21.3557 3.4949L16.3557 3.4949L16.3557 36.2166L21.3557 36.2166Z" fill="black"/>
              </svg>
            </button>
          </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footer