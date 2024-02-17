import {useState} from 'react'
import { BsBoxArrowRight, BsBoxArrowLeft } from "react-icons/bs";
import a from "../../assets/1.svg"
import b from "../../assets/2.svg"
import c from "../../assets/3.svg"
import d from "../../assets/4.svg"
import e from "../../assets/5.svg"
import f from "../../assets/6.svg"

const Latest = () => {
  const [page, setPage] = useState("1/2")
  const changeRight =() =>{
    setPage("2/2")
  }
  const changeLeft =() =>{
    setPage("1/2")
  }
  return (
    <>
        <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-28 mb-4 w-full max-w-[1225px] max-md:mt-10 max-md:max-w-full">
          <div className="text-6xl font-semibold leading-10 text-blue-950 tracking-[2.24px] max-md:max-w-full max-md:text-4xl">
            Latest Articles
          </div>{" "}
          {page==='1/2'?<div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-7 py-9 w-full bg-white rounded-3xl border-solid border-[1.37px] border-slate-400 border-opacity-40 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={a}
                    className="w-full aspect-[1.27]"
                  />{" "}
                  <div className="flex flex-col self-center mt-9 max-w-full w-[295px]">
                    <div className="flex flex-col py-0.5">
                      <div className="text-xl font-bold leading-7 whitespace-nowrap text-blue-950">
                        Grilled Tomatoes at Home
                      </div>{" "}
                      <div className="mt-3.5 text-base tracking-tight leading-7 text-gray-700">
                        PLorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard...
                      </div>
                    </div>
                    <div className="justify-center px-7 py-1 mt-7 text-base font-semibold tracking-wide leading-9 text-gray-600 rounded-3xl border border-gray-600 border-solid max-md:px-5">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-7 pt-7 pb-11 w-full bg-white rounded-3xl border-solid border-[1.37px] border-slate-400 border-opacity-40 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={b}
                    className="w-full aspect-[1.27]"
                  />
                  <div className="flex flex-col self-center mt-9 max-w-full w-[295px]">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-7 text-blue-950">
                        Snacks for Travel
                      </div>
                      <div className="mt-3.5 text-base tracking-tight leading-7 text-gray-700">
                        PLorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard...
                      </div>
                    </div>{" "}
                    <div className="justify-center px-7 py-1 mt-7 text-base font-semibold tracking-wide leading-9 text-gray-600 rounded-3xl border border-gray-600 border-solid max-md:px-5">
                      Read More
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-7 pt-7 pb-11 w-full bg-white rounded-3xl border-solid border-[1.37px] border-slate-400 border-opacity-40 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={c}
                    className="w-full aspect-[1.27]"
                  />{" "}
                  <div className="flex flex-col self-center mt-9 max-w-full w-[295px]">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-7 text-blue-950">
                        Post-workout Recipes
                      </div>{" "}
                      <div className="mt-3.5 text-base tracking-tight leading-7 text-gray-700">
                        PLorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard...
                      </div>
                    </div>
                    <div className="justify-center px-7 py-1 mt-7 text-base font-semibold tracking-wide leading-9 text-gray-600 rounded-3xl border-gray-600 border-solid border-[1.37px] max-md:px-5">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>:<div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-7 py-9 w-full bg-white rounded-3xl border-solid border-[1.37px] border-slate-400 border-opacity-40 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={d}
                    className="w-full aspect-[1.27]"
                  />{" "}
                  <div className="flex flex-col self-center mt-9 max-w-full w-[295px]">
                    <div className="flex flex-col py-0.5">
                      <div className="text-xl font-bold leading-7 whitespace-nowrap text-blue-950">
                      How To Grill Corn
                      </div>{" "}
                      <div className="mt-3.5 text-base tracking-tight leading-7 text-gray-700">
                        PLorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard...
                      </div>
                    </div>
                    <div className="justify-center px-7 py-1 mt-7 text-base font-semibold tracking-wide leading-9 text-gray-600 rounded-3xl border border-gray-600 border-solid max-md:px-5">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-7 pt-7 pb-11 w-full bg-white rounded-3xl border-solid border-[1.37px] border-slate-400 border-opacity-40 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={e}
                    className="w-full aspect-[1.27]"
                  />
                  <div className="flex flex-col self-center mt-9 max-w-full w-[295px]">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-7 text-blue-950">
                      Crunchwrap Supreme
                      </div>
                      <div className="mt-3.5 text-base tracking-tight leading-7 text-gray-700">
                        PLorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard...
                      </div>
                    </div>{" "}
                    <div className="justify-center px-7 py-1 mt-7 text-base font-semibold tracking-wide leading-9 text-gray-600 rounded-3xl border border-gray-600 border-solid max-md:px-5">
                      Read More
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-7 pt-7 pb-11 w-full bg-white rounded-3xl border-solid border-[1.37px] border-slate-400 border-opacity-40 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={f}
                    className="w-full aspect-[1.27]"
                  />{" "}
                  <div className="flex flex-col self-center mt-9 max-w-full w-[295px]">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-7 text-blue-950">
                      Broccoli Cheese Soup
                      </div>{" "}
                      <div className="mt-3.5 text-base tracking-tight leading-7 text-gray-700">
                        PLorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard...
                      </div>
                    </div>
                    <div className="justify-center px-7 py-1 mt-7 text-base font-semibold tracking-wide leading-9 text-gray-600 rounded-3xl border-gray-600 border-solid border-[1.37px] max-md:px-5">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
          
          <div className="flex gap-4 self-center mt-16 max-w-full text-2xl leading-7 text-gray-600 whitespace-nowrap w-[114px] max-md:mt-10">
            <BsBoxArrowLeft className=" cursor-pointer" onClick={changeLeft}/>
            <div>{page}</div>
            <BsBoxArrowRight className=" cursor-pointer" onClick={changeRight}/>
          </div>
        </div>
      </div>

    </>
  ) 
}

export default Latest