import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import Icon from "../../assets/icon.svg"

const Footer = () => {
  return (
    <>
              <div className="flex flex-col justify-center px-16 py-12 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
        <div className="mt-10 mr-11 mb-11 ml-11 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              <div className="grow px-px max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src={Icon}
                      className="self-stretch my-auto max-w-full aspect-[1.28] w-[161px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base leading-6 text-zinc-500 max-md:mt-10">
                      <div className="text-xl font-semibold tracking-wide leading-7 text-blue-950">
                        Contact Us
                      </div>
                      <div className="mt-7 leading-6">
                        Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate
                        near YTM Market, XYZ-343434
                      </div>
                      <div className="mt-7">example2020@gmail.com</div>
                      <div className="mt-6">(904) 443-0343</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base leading-7 whitespace-nowrap text-zinc-500 max-md:mt-10">
                      <div className="text-xl font-semibold tracking-wide leading-7 text-blue-950">
                        More
                      </div>
                      <div className="mt-8 leading-[186%]">About Us</div>
                      <div className="mt-7">Products</div>
                      <div className="mt-8">Career</div>
                      <div className="mt-7">Contact Us</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10">
                      <p className='max-sm:hidden text-xl font-semibold tracking-wide leading-7 text-blue-950'>Social Links</p>
                      <div className="flex gap-2 mt-5 max-sm:hidden">
                      <AiOutlineInstagram className=" text-xl" />
                      <AiOutlineTwitter className=" text-xl" />
                      <FaFacebookF className=" text-xl" />
                      </div>
                      <div className="mt-20 text-base leading-6 text-center text-gray-400 whitespace-nowrap max-md:mt-10">
                        © 2022 Food Truck Example
                      </div>
                      <div className="flex gap-2 mt-5 self-center md:hidden">
                      <AiOutlineInstagram className=" text-xl" />
                      <AiOutlineTwitter className=" text-xl" />
                      <FaFacebookF className=" text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer