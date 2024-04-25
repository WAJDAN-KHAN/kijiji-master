import { useState } from "react";

const locations = [
  {
    id: 9003,
    name: "Alberta",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9007,
    name: "British Columbia",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9006,
    name: "Manitoba",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9005,
    name: "Brunswick",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9008,
    name: "New foundland",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9002,
    name: "Nova Scotia",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9004,
    name: "Ontario (A - L)",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 100009004,
    name: "Ontario (M - Z)",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9011,
    name: "Prince Edward Island",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9001,
    name: "Québec",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9009,
    name: "Saskatchewan",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: 9010,
    name: "Territories",
    isSelected: false,
    img: "./assets/images/right-arrow (3).png",
  },
];

const Alberta = [
  { id: "1700234", name: "Banff / Canmore" },
  { id: "1700199", name: "Calgary" },
  {
    id: "1700202",
    name: "Edmonton Area",
    img: "./assets/images/right-arrow (3).png",
  },
  { id: "1700232", name: "Fort McMurray" },
  { id: "1700233", name: "Grande Prairie" },
  { id: "1700230", name: "Lethbridge" },
  { id: "1700095", name: "Lloydminster" },
  { id: "1700231", name: "Medicine Hat" },
  { id: "1700136", name: "Red Deer" },
];

const britishColumbia = [
  {
    id: "1700296",
    name: "Cariboo Area",
    href: "/h-cariboo-area/1700296",
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: "1700298",
    name: "Comox Valley Area",
    href: "/h-comox-valley-area/1700298",
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: "1700300",
    name: "Cowichan Valley / Duncan",
    href: "/h-cowichan-valley-duncan/1700300",
  },
  { id: "1700224", name: "Cranbrook", href: "/h-cranbrook/1700224" },
  {
    id: "1700139",
    name: "Fraser Valley",
    href: "/h-fraser-valley/1700139",
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: "80003",
    name: "Greater Vancouver Area",
    href: "/h-greater-vancouver-area/80003",
    img: "./assets/images/right-arrow (3).png",
  },
  { id: "1700227", name: "Kamloops", href: "/h-kamloops/1700227" },
  {
    id: "1700228",
    name: "Kelowna",
    href: "/h-kelowna/1700228",
    img: "./assets/images/right-arrow (3).png",
  },
  { id: "1700263", name: "Nanaimo", href: "/h-nanaimo/1700263" },
  { id: "1700226", name: "Nelson", href: "/h-nelson/1700226" },
  {
    id: "1700295",
    name: "Peace River Area",
    href: "/h-peace-river-area/1700295",
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: "1700299",
    name: "Port Alberni / Oceanside",
    href: "/h-port-alberni-oceanside/1700299",
    img: "./assets/images/right-arrow (3).png",
  },
  {
    id: "1700301",
    name: "Port Hardy / Port McNeill",
    href: "/h-port-hardy-port-mcneill/1700301",
  },
  {
    id: "1700294",
    name: "Powell River District",
    href: "/h-powell-river-district/1700294",
  },
  { id: "1700143", name: "Prince George", href: "/h-prince-george/1700143" },
  { id: "1700302", name: "Revelstoke", href: "/h-revelstoke/1700302" },
  {
    id: "1700297",
    name: "Skeena-Bulkley Area",
    href: "/h-skeena-bulkley-area/1700297",
    img: "./assets/images/right-arrow (3).png",
  },
  { id: "1700293", name: "Sunshine Coast", href: "/h-sunshine-coast/1700293" },
  { id: "1700229", name: "Vernon", href: "/h-vernon/1700229" },
  { id: "1700173", name: "Victoria", href: "/h-victoria-bc/1700173" },
  { id: "1700100", name: "Whistler", href: "/h-whistler/1700100" },
];

const Manitoba = [
  {
    id: "1700085",
    name: "Brandon Area",
    link: "/h-brandon-area/1700085",
    img: "./assets/images/right-arrow (3).png",
  },
  { id: "1700236", name: "Flin Flon", link: "/h-flin-flon/1700236" },
  { id: "1700235", name: "Thompson", link: "/h-thompson/1700235" },
  { id: "1700192", name: "Winnipeg", link: "/h-winnipeg/1700192" },
];

const Brunswick = [
  { id: 1700260, name: "Bathurst" },
  { id: 1700261, name: "Edmundston" },
  { id: 1700018, name: "Fredericton" },
  { id: 1700262, name: "Miramichi" },
  { id: 1700001, name: "Moncton" },
  { id: 80017, name: "Saint John" },
];

const Newfoundland = [
  { locId: "1700254", name: "Corner Brook" },
  { locId: "1700255", name: "Gander" },
  {
    locId: "1700044",
    name: "Labrador",
    img: "./assets/images/right-arrow (3).png",
  },
  { locId: "1700113", name: "St. John's" },
];
const Nova = [
  { id: "1700256", name: "Annapolis Valley" },
  { id: "1700257", name: "Bridgewater" },
  { id: "1700011", name: "Cape Breton" },
  { id: "80010", name: "Halifax" },
  { id: "1700258", name: "New Glasgow" },
  { id: "1700047", name: "Truro" },
  { id: "1700259", name: "Yarmouth" },
];

const Ontario = [
  { id: "1700006", name: "Barrie" },
  { id: "1700129", name: "Belleville Area" },
  { id: "1700206", name: "Brantford" },
  { id: "1700247", name: "Brockville" },
  { id: "1700239", name: "Chatham-Kent" },
  { id: "1700133", name: "Cornwall" },
  { id: "1700242", name: "Guelph" },
  { id: "80014", name: "Hamilton" },
  { id: "1700237", name: "Kapuskasing" },
  { id: "1700249", name: "Kenora" },
  { id: "1700181", name: "Kingston Area" },
  { id: "1700209", name: "Kitchener Area" },
  { id: "1700240", name: "Leamington" },
  { id: "1700214", name: "London" },
];
const Ontario2 = [
  { id: "1700078", name: "Muskoka" },
  { id: "1700248", name: "Norfolk County" },
  { id: "1700243", name: "North Bay" },
  { id: "1700184", name: "Ottawa / Gatineau Area" },
  { id: "1700187", name: "Owen Sound" },
  { id: "1700217", name: "Peterborough Area" },
  { id: "1700074", name: "Renfrew County Area" },
  { id: "1700189", name: "Sarnia Area" },
  { id: "1700244", name: "Sault Ste. Marie" },
  { id: "80016", name: "St. Catharines" },
  { id: "1700245", name: "Sudbury" },
  { id: "1700126", name: "Thunder Bay" },
  { id: "1700238", name: "Timmins" },
  { id: "1700272", name: "Toronto (GTA)" },
  { id: "1700220", name: "Windsor Region" },
  { id: "1700241", name: "Woodstock" },
];

const prince = [
  {
    id: 1,
    name: "Prince Edward Island",
  },
];
const quebic = [
  { id: "1700059", name: "Abitibi-Témiscamingue" },
  { id: "1700251", name: "Baie-Comeau" },
  { id: "1700121", name: "Centre-du-Québec" },
  { id: "1700062", name: "Chaudière-Appalaches" },
  { id: "1700284", name: "Chibougamau / Northern Québec" },
  { id: "1700066", name: "Gaspé" },
  { id: "1700253", name: "Granby" },
  { id: "80002", name: "Greater Montréal" },
  { id: "1700283", name: "Lanaudière" },
  { id: "1700282", name: "Laurentides" },
  { id: "1700147", name: "Mauricie" },
  { id: "1700124", name: "Québec City" },
  { id: "1700250", name: "Rimouski / Bas-St-Laurent" },
  { id: "1700178", name: "Saguenay-Lac-Saint-Jean" },
  { id: "1700151", name: "Saint-Hyacinthe" },
  { id: "1700252", name: "Saint-Jean-sur-Richelieu" },
  { id: "1700071", name: "Sept-Îles" },
  { id: "1700156", name: "Sherbrooke" },
];

const saska = [
  { id: "1700265", name: "La Ronge" },
  { id: "1700264", name: "Meadow Lake" },
  { id: "1700266", name: "Nipawin" },
  { id: "1700088", name: "Prince Albert" },
  { id: "1700194", name: "Regina Area" },
  { id: "1700197", name: "Saskatoon" },
  { id: "1700093", name: "Swift Current" },
];
const locationData = [
  {
    id: 1700103,
    name: "Northwest Territories",
    link: "/h-northwest-territories/1700103",
  },
  { id: 1700105, name: "Nunavut", link: "/h-nunavut/1700105" },
  { id: 1700101, name: "Yukon", link: "/h-yukon/1700101" },
];
const LocationSection = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const getContent = () => {
    switch (activeTab) {
      case 0:
        return Alberta;
      case 1:
        return britishColumbia;
      case 2:
        return Manitoba;
      case 3:
        return Brunswick;
      case 4:
        return Newfoundland;
      case 5:
        return Nova;
      case 6:
        return Ontario;
      case 7:
        return Ontario2;
      case 8:
        return prince;
      case 9:
        return quebic;
      case 10:
        return saska;
      case 11:
        return locationData;
      // Add cases for other locations
      default:
        return [];
    }
  };

  return (
    <div className="py-[30px]">
      <div className="container mx-auto px-[15px]">
        <div className="select-container max-w-full md:max-w-[640px] mx-auto">
          <p className="py-[15px]">
            <strong>
              Welcome to Kijiji, Canada's most popular free, local classifieds
              site.
            </strong>
          </p>
          <div className="select-location-box w-full bg-[#fff]">
            <div
              className="headerr bg-[#373373] text-white "
              style={{
                padding: "15px 17px 13px",
                borderTopRightRadius: "3px",
                borderTopLeftRadius: "3px",
              }}
            >
              <h1 class="widget-title text-[14px] font-bold">
                Select Location
              </h1>
            </div>
            <div className="content w-full border border-[#d2d3d7] py-[15px] mb-[30px] px-3">
              <h2 class="title-instructions text-[#3e4153] text-[13px] font-bold pl-[17px] pb-[4px] border-b border-[#d2d3d7]">
                To see classifieds ads or post your own ad, click an area.
              </h2>
              <div className="py-3">
                <div className="flex flex-wrap ">
                  <div className="main-list min-w-full md:min-w-[150px] mr-[20px] pl-[5px] border-b border-[#d2d3d7] md:border-none">
                    <ul className="list-none">
                      {locations.map((link, index) => (
                        <li
                          key={index}
                          className={`py-[2px] px-[6px] text-[#3e4153] hover:text-[#3e4153] text-[13] hover:bg-[#f1f1f2] cursor-pointer flex justify-between items-center ${
                            activeTab === index ? "active-list" : ""
                          }`}
                          onClick={() => handleTabClick(index)}
                        >
                          {link.name}
                          <img src={link.img} alt="" width={10} height={10} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tab-content  mr-[20px] pl-[5px]">
                    <ul className="list-none min-w-full md:min-w-[210px]">
                      {getContent().map((item, index) => (
                        <li
                          key={index}
                          className="py-[2px] px-[6px] text-[#3e4153] hover:text-[#3e4153]  text-[13] hover:bg-[#f1f1f2] cursor-pointer flex justify-between items-center"
                        >
                          {item.name}
                          <img src={item.img} alt="" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="py-3 flex justify-center">
                  <button className="bg-[#373373] text-[#fff] uppercase py-[4px] px-[10px] rounded-[5px]">
                    Go
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
