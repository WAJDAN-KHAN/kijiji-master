import { useMenu } from "../../../hooks/useMenu";

export const Footer = () => {
  const links = [
    {
      text: "About",
      href: "https://www.kijiji.ca/kijijicentral/general/about-us/?utm_source=Kijiji&utm_medium=Footer",
    },
    { text: "Join Us", href: "https://adevinta.com/jobs?company=kijiji" },
    {
      text: "Member Benefits",
      href: "https://help.kijiji.ca/helpdesk/basics/benefits-of-registering",
    },
    { text: "Advertise on Kijiji", href: "https://business.kijiji.ca" },
  ];
  const links2 = [
    {
      text: "Kijiji Autos",
    },
    {
      text: "Kijiji Central",
    },
    {
      text: "Tools to promote ads",
    },
  ];
  const links3 = [
    {
      text: "Terms of Use",
      href: "https://help.kijiji.ca/helpdesk/policies/kijiji-terms-of-use",
    },
    {
      text: "Privacy Policy",
      href: "https://help.kijiji.ca/helpdesk/policies/kijiji-privacy-policy",
    },
    {
      text: "Posting Policy",
      href: "https://help.kijiji.ca/helpdesk/policies/posting-policies",
    },
    {
      text: "AdChoices",
      href: "https://help.kijiji.ca/helpdesk/policies/kijiji-privacy-policy",
    },
  ];
  const listItems = [
    { text: "Help Desk", href: "https://help.kijiji.ca/helpdesk/" },
    { text: "Kijiji en Français", href: "?siteLocale=fr_CA" },
    {
      text: "Accessibility",
      href: "https://help.kijiji.ca/helpdesk/policies/multi-year-accessibility-plan",
    },
    { text: "Change Contrast", htmlFor: "ContrastSwitch" },
  ];

  const { setMenu } = useMenu();

  return (
    <div
      className="text-white bg-[#3e4153] py-[40px]"
      onMouseOver={() => setMenu(false)}
    >
      <div className="container mx-auto px-[16px]">
        <div className="link-container max-w-full md:max-w-[980px] mx-auto pt-[88px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="content pb-[60px] ">
                <h1 className="text-[15px] font-bold leading-[20px] text-[#c5c6cb] tracking-[2px]">
                  Kijiji
                </h1>
                <ul className="list-none p-0 m-0">
                  {links.map((link, i) => (
                    <li
                      className="mt-[25px] cursor-pointer text-[15px] font-bold leading-[20px] text-[#fff] hover:text-[#37A864] hover:underline  "
                      key={i}
                    >
                      {link.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="content pb-[60px] ">
                <h1 className="text-[15px] font-bold leading-[20px] text-[#c5c6cb] tracking-[2px]">
                  EXPLORE
                </h1>
                <ul className="list-none p-0 m-0">
                  {links2.map((link, i) => (
                    <li
                      className="mt-[25px] cursor-pointer text-[15px] font-bold leading-[20px] text-[#fff] hover:text-[#37A864] hover:underline "
                      key={i}
                    >
                      {link.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="content pb-[60px] ">
                <h1 className="text-[15px] font-bold leading-[20px] text-[#c5c6cb] tracking-[2px]">
                  INFO
                </h1>
                <ul className="list-none p-0 m-0">
                  {links3.map((link, i) => (
                    <li
                      className="mt-[25px] cursor-pointer text-[15px] font-bold leading-[20px] text-[#fff] hover:text-[#37A864] hover:underline "
                      key={i}
                    >
                      {link.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="content pb-[60px] ">
                <h1 className="text-[15px] font-bold leading-[20px] text-[#c5c6cb] tracking-[2px]">
                  SUPPORT
                </h1>
                <ul className="list-none p-0 m-0">
                  {listItems.map((link, i) => (
                    <li
                      className="mt-[25px] cursor-pointer text-[15px] font-bold leading-[20px] text-[#fff]  flex gap-2"
                      key={i}
                    >
                      <span className="hover:text-[#37A864] hover:underline">
                        {link.text}
                      </span>
                      {link.text === "Change Contrast" && (
                        <label htmlFor="three">
                          <input id="three" type="checkbox" />
                        </label>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-[20px] flex-wrap">
            <img src="./assets/images/svgexport-37.svg" alt="" />
            <img src="./assets/images/svgexport-38.svg" alt="" />
            <div className="flex gap-4 flex-wrap">
              <div className="h-[50px] w-[50px] cursor-pointer bg-[#6f727f] rounded-[25px] hover:bg-[#316FF6] flex justify-center items-center">
                <img
                  src="./assets/images/svgexport-39.svg"
                  width={10}
                  height={20}
                  alt=""
                />
              </div>
              <div className="h-[50px] w-[50px] cursor-pointer bg-[#6f727f] rounded-[25px] hover:bg-[#cd486b]  flex justify-center items-center">
                <img
                  src="./assets/images/svgexport-40.svg"
                  width={22}
                  height={22}
                  alt=""
                />
              </div>
              <div className="h-[50px] w-[50px] cursor-pointer bg-[#6f727f] rounded-[25px] hover:bg-[#1DA1F2] flex justify-center items-center">
                <img
                  src="./assets/images/svgexport-41.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <div className="h-[50px] w-[50px] cursor-pointer bg-[#6f727f] rounded-[25px] hover:bg-[#37A864] flex justify-center items-center">
                <img
                  src="./assets/images/svgexport-42.svg"
                  width={25}
                  height={25}
                  alt=""
                />
              </div>
              <div className="h-[50px] w-[50px] cursor-pointer bg-[#6f727f] rounded-[25px] hover:bg-[#CD201F] flex justify-center items-center">
                <img
                  src="./assets/images/svgexport-43.svg"
                  width={25}
                  height={18}
                  alt=""
                />
              </div>
            </div>

            <p className="text-center text-[#c5c6cb] text-[14px]">
              All rights reserved. Google, Google Play, YouTube and other marks
              are trademarks of Google Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
