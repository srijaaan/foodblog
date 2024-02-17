import about from '../../assets/about.svg'

const About = () => {
  return (
    <>
    <div className="flex flex-col items-center px-16 pt-12 w-full  max-md:px-5 max-md:max-w-full">
    <div className='z-10 mt-36 w-screen max-md:mt-10  bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300'>
    <div className="z-10 mt-36 w-full max-w-[1031px] max-md:mt-10 max-md:max-w-full md:-mt-0.5 md:ml-60">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={about}
            className="grow w-full aspect-[0.82] max-md:mt-10 max-sm:hidden"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full ">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col justify-center py-px max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="ml-12 text-5xl font-semibold leading-7 text-blue-950 max-md:max-w-full max-md:text-4xl max-sm:mx-auto">
                  About Us
                </div>
                <div className="mt-7 ml-12 text-base leading-7 text-gray-700 max-md:max-w-full max-sm:mr-6 max-sm:ml-7 max-sm:text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. t has survived not only five
                  centuries.
                </div>
              </div>
            </div>{" "}
            <div className="justify-center self-start py-1 pr-7 mt-5 -mr-0.5 ml-12 text-base font-semibold tracking-wide leading-9 text-white whitespace-nowrap bg-red-500 rounded-3xl max-md:px-5 max-sm:self-center max-sm:mr-4 max-sm:ml-5 max-sm:mb-10">
              <div className="ml-12 max-sm:ml-5">Read More</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>{" "}
  </>
  )
}

export default About