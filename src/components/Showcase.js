import Background from '../assets/background/bg.png';

function Showcase() {
  return (
    <>
      <div className="mx-5 md:mx-10 lg:mx-0 h-56 lg:h-auto flex text-2xl justify-between items-center relative lg:basis-2/4 w-full bg-[#051D4C] shadow-xl  rounded-xl">
          <div className="text-left uppercase ml-5 text-white font-bold w-20">
            Latest Transparent Glasses
          </div>
          <img
            className="absolute bg-fixed left-36 sm:left-52 md:left-58 object-contain h-48"
            src={Background}
            alt="hands up with glasses"
          />
          {/* <div className="absolute bottom-0 right-0 hidden sm:flex">
            <button className="text-xl bg-white text-black px-4 py-3 uppercase font-semibold rounded-br-xl">
              Shop Now
            </button>
          </div> */}
      </div>
    </>
  )
}

export default Showcase