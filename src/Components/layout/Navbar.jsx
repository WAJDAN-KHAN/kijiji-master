import { useState } from "react";
import { useMenu } from "../../../hooks/useMenu";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import businessImg from "/assets/images/buy.jpg";
import carImg from "/assets/images/car.jpg";
import communityImg from "/assets/images/community.jpg";
import petImg from "/assets/images/pets.jpg";
import jobImg from "/assets/images/jobs.jpg";
import realEstateImg from "/assets/images/real-estate.jpg";
import servicesImg from "/assets/images/services.jpg";
import vacationImg from "/assets/images/vacation.jpg";
const Navbar = () => {
  const { setMenu } = useMenu();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="py-[20px] bg-white"
      style={{
        boxShadow: "0 2px 5px rgba(0,0,0,.05)",
      }}
      onMouseOver={() => setMenu(false)}
    >
      <div className="max-w-[1440px] px-8 mx-auto w-full hidden md:block">
        <div className="flex justify-between items-center flex-wrap">
          <div className="logo">
            <img
              src="./assets/images/svgexport-3.svg"
              width={66}
              height={33}
              alt=""
            />
          </div>
          <div className="flex items-center">
            <div
              className="relative md:max-w-[320px]   h-[48px] text-[#3e4153]  focus-within:border-[#1477d4] focus-within:border focus-within:ring-[#1477d4] focus-within:ring-opacity-50 focus-within:ring-2 focus-within:shadow-outline-[#1477d4]"
              style={{
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
                borderTop: "1px solid #d2d3d7",
                borderLeft: "1px solid #d2d3d7",
                borderBottom: "1px solid #d2d3d7",
              }}
            >
              <img
                src="./assets/images/search-interface-symbol.png"
                className="absolute top-[18px] left-3"
                alt=""
              />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="border-none bg-transparent outline-none placeholder:text-[#6f727f] h-[48px] pl-[46px] border-b-[#d2d3d7] border-r-0"
                name=""
                id=""
              />
            </div>
            <div className="relative">
              <div
                className="  relative md:max-w-[320px]   h-[48px] text-[#3e4153]    focus-within:border-[#1477d4] focus-within:ring-[#1477d4] focus-within:ring-opacity-50 focus-within:ring-2 focus-within:shadow-outline-[#1477d4]"
                style={{
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  borderTop: "1px solid #d2d3d7",
                  borderRight: "1px solid #d2d3d7",
                  borderBottom: "1px solid #d2d3d7",
                }}
              >
                <div className="relative">
                  <button
                    className="flex items-center h-[48px] gap-2 buttonn  px-[16px] text-[#6f727f] text-[16px]"
                    onClick={toggleMenu}
                  >
                    <img src="./assets/images/svgexport-6.svg" alt="" />
                    All categories
                    {isOpen ? <GoChevronUp /> : <GoChevronDown />}
                  </button>

                  <div
                    className={`absolute top-full left-0 mt-1 bg-white shadow-md rounded-md w-full z-[999] ${
                      !isOpen ? "opacity-0" : "opacity-100"
                    } transition-opacity ease-linear duration-300`}
                  >
                    <ul className="flex flex-col gap-2">
                      <li className="p-3 flex items-center  gap-2  text-primary text-[14px] hover:bg-[#ececee] transition-all">
                        {" "}
                        <img src="./assets/images/svgexport-6.svg" alt="" />
                        All categories
                      </li>
                      <li className="p-3 flex items-center  gap-2  text-primary text-[14px] hover:bg-[#ececee] transition-all">
                        {" "}
                        <img src="./assets/images/buy-svg.svg" alt="" />
                        Buy & Sell
                      </li>
                      <li className="p-3 flex items-center  gap-2  text-primary text-[14px] hover:bg-[#ececee] transition-all">
                        {" "}
                        <img src="./assets/images/car-svg.svg" alt="" />
                        Cars & Vehicles
                      </li>
                      <li className="p-3 flex items-center  gap-2  text-primary text-[14px] hover:bg-[#ececee] transition-all">
                        {" "}
                        <img src="./assets/images/real-estate-svg.svg" alt="" />
                        Real Estate
                      </li>
                      <li className="p-3 flex items-center  gap-2  text-primary text-[14px] hover:bg-[#ececee] transition-all">
                        {" "}
                        <img src="./assets/images/jobs-svg.svg" alt="" />
                        Jobs
                      </li>
                      <li className="p-3 flex items-center  gap-2  text-primary text-[14px] hover:bg-[#ececee] transition-all">
                        {" "}
                        <img src="./assets/images/services-svg.svg" alt="" />
                        Services
                      </li>
                      <li className="p-3 flex items-center  gap-2  text-primary text-[14px] hover:bg-[#ececee] transition-all">
                        {" "}
                        <img src="./assets/images/pets-svg.svg" alt="" />
                        Pets
                      </li>
                      <li className="p-3 flex items-center  gap-2  text-primary text-[14px] hover:bg-[#ececee] transition-all">
                        {" "}
                        <img src="./assets/images/community-svg.svg" alt="" />
                        Community
                      </li>
                      <li className="p-3 flex items-center  gap-2  text-primary text-[14px] hover:bg-[#ececee] transition-all">
                        {" "}
                        <img src="./assets/images/vacation-svg.svg" alt="" />
                        Vacational Rental
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:max-w-[320px]     h-[48px] text-[#3e4153]   focus-within:border-[#1477d4] focus-within:ring-[#1477d4] focus-within:ring-opacity-50 focus-within:ring-2 focus-within:shadow-outline-[#1477d4]">
              <button className="flex items-center border rounded-[4px] border-[#cacaea] h-[48px] gap-2   px-[16px] text-[#373373] text-[16px] font-bold transition-all hover:bg-[#373373] hover:text-white hover:rounded-[4px] hover:border hover:border-tr">
                Search
              </button>
            </div>

            <div className="locatoon pl-3 flex gap-2">
              <img src="./assets/images/svgexport-17.svg" alt="" />
              <h1 className="text-[16px] font-semibold text-[#373373]  ">
                Select location...
              </h1>
            </div>
          </div>
          <div className="flex gap-[30px] items-center">
            <h1 className="font-bold text-[16px] text-[#373373]">FR</h1>
            <div className="flex gap-2">
              <h1 className="font-bold text-[16px] text-[#1477d4]">Register</h1>
              <p className="font-normal text-[16px] text-[#373373]">or</p>
              <h1 className="font-bold text-[16px] text-[#1477d4]">Sign in</h1>
            </div>
            <div className="bton">
              <button
                className="relative bg-[#373373] text-white font-bold px-[16px] py-[10px] rounded-[4px] transition-all hover:bg-[#4b4881]"
                style={{ boxShadow: "0 2px 10px 0 rgba(55,51,115,.3)" }}
              >
                Post ad
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto w-full block md:hidden px-[15px]">
        <div className="flex justify-between items-center flex-wrap">
          <div className="logo">
            <img
              src="./assets/images/svgexport-3.svg"
              width={66}
              height={33}
              alt=""
            />
          </div>

          <div className="flex gap-[30px] items-center">
            <h1 className="font-bold text-[16px] text-[#373373]">FR</h1>
            <div className="flex gap-2">
              <h1 className="font-bold text-[16px] text-[#1477d4]">Register</h1>
              <p className="font-normal text-[16px] text-[#373373]">or</p>
              <h1 className="font-bold text-[16px] text-[#1477d4]">Sign in</h1>
            </div>
            <div className="bton">
              <button
                className="relative bg-[#373373] text-white font-bold px-[16px] py-[10px] rounded-[4px] transition-all hover:bg-[#4b4881]"
                style={{ boxShadow: "0 2px 10px 0 rgba(55,51,115,.3)" }}
              >
                Post ad
              </button>
            </div>
          </div>
        </div>
        <div className="flex   flex-col gap-4 mt-4">
          <div className="relative max-w-full border border-[#d2d3d7] rounded-[4px]  h-[48px] text-[#3e4153]  focus-within:border-[#1477d4] focus-within:border focus-within:ring-[#1477d4] focus-within:ring-opacity-50 focus-within:ring-2 focus-within:shadow-outline-[#1477d4]">
            <img
              src="./assets/images/search-interface-symbol.png"
              className="absolute top-[18px] left-3"
              alt=""
            />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border-none bg-transparent outline-none placeholder:text-[#6f727f] h-[48px] pl-[46px] border-b-[#d2d3d7] border-r-0"
              name=""
              id=""
            />
          </div>

          <div className="locatoon pl-3 flex gap-2">
            <img src="./assets/images/svgexport-17.svg" alt="" />
            <h1 className="text-[16px] font-semibold text-[#373373]  ">
              Select location...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
