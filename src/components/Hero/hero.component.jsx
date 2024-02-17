import HeroImage from '../../assets/hero.svg'
import Icon from '../../assets/icon.png'

const Hero = () => {
    return (
      <div className="flex flex-col">
      <div className="hidden overflow-hidden relative flex-col items-end px-16 pt-7 pb-12 min-h-[804px] max-md:flex max-md:px-5 max-md:max-w-full max-sm:flex max-sm:pb-40 max-sm:max-w-[90%] left-9 size-full max-sm:min-h-[380px]">
        <img
          loading="lazy"
          src={HeroImage}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative justify-center px-3 py-1 rounded-3xl border border-white border-solid bg-white bg-opacity-0 mb-[538px] max-md:mb-10 max-sm:text-white">
          Get In Touch
        </div>
      </div>
      <div className="flex flex-col pb-11 pl-20 w-full bg-white max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-8 font-bold max-md:mt-10">
              <img
                loading="lazy"
                src={Icon}
                className="max-w-full shadow-md aspect-[1.28] w-[107px] max-md:flex max-sm:hidden"
              />
              <div className="mt-32 text-6xl text-[#E23744] leading-[69px] max-md:mt-10 max-md:text-4xl max-md:leading-[49px] max-sm:pr-6 max-sm:text-center">
                <font face="Source Sans Pro, sans-serif">
                  <font>
                    <font color="#0e2368"></font>
                  </font>
                  <span className="text-center">
                    <span className="text-center">
                      <span className="text-blue-950">Discover the </span>
                      <br />
                      <span>Best</span>{" "}
                      <span className="text-blue-950">Food </span>
                      <span className="text-blue-950">and Drinks</span>
                    </span>
                  </span>
                  <font color="#0e2368"></font>
                </font>
              </div>
              <div className="mt-11 text-base leading-7 text-gray-700 max-md:mt-10 max-sm:pr-2 max-sm:text-center font-light">
                <font face="Open Sans, sans-serif">
                  Naturally made Healthcare Products for the better care &amp;
                  support of your body.
                </font>
              </div>
              <div className="justify-center px-9 py-3.5 mt-11 mr-48 ml-0 text-lg tracking-normal leading-9 text-center text-white bg-red-500 rounded-[34px] max-md:px-5 max-md:mt-10 max-sm:mr-24 max-sm:ml-20 max-sm:text-center">
                Explore Now!
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col pt-1.5 pb-8 pl-4 ml-auto w-full text-base font-semibold tracking-wide leading-9 text-white whitespace-nowrap fill-red-500 max-w-[565px] min-h-[839px] max-md:hidden max-md:mt-10 max-md:max-w-full max-sm:hidden">
              <img
                loading="lazy"
                src={HeroImage}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col justify-center self-center px-3 py-1 mt-5 mr-5 ml-auto w-auto rounded-3xl border border-white border-solid bg-white bg-opacity-0 mb-[538px] max-md:mb-10">
                <div className="self-center w-auto">Get In Touch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default Hero