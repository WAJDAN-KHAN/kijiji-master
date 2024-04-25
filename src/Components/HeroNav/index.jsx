import { useState } from "react";
import businessImg from "/assets/images/buy.jpg";
import carImg from "/assets/images/car.jpg";
import communityImg from "/assets/images/community.jpg";
import petImg from "/assets/images/pets.jpg";
import jobImg from "/assets/images/jobs.jpg";
import realEstateImg from "/assets/images/real-estate.jpg";
import servicesImg from "/assets/images/services.jpg";
import vacationImg from "/assets/images/vacation.jpg";
import {
  IoChevronBackOutline,
  IoChevronForward,
  IoClose,
} from "react-icons/io5";
import { useMenu } from "../../../hooks/useMenu";

const sell = [
  {
    title: "Arts & Collectibles",
  },
  {
    title: "Audio",
    children: [
      "iPods & MP3s",
      "iPods & MP3s Accessories",
      "Headphones",
      "Speakers",
      "Stereo Systems & Home Theatre",
      "Other",
    ],
  },
  {
    title: "Baby Items",
    children: [
      "Bathing & Changing",
      "Clothing-Premie",
      "Clothing-0-3 Months",
      "Clothing-3-6 Months",
      "Clothing-6-9 Months",
      "Clothing-9-12 Months",
      "Clothing-12-18 Months",
      "Clothing-18-24 Months",
      "Clothing-2T",
      "Clothing-3T",
      "Clothing-4T",
      "Clothing-5T",
      "Cribs",
      "Feeding, High Chairs",
      "Gates, Monitors & Safety",
      "Playpens, Swings & Saucers",
      "Toys",
      "Multi-Item",
      "Other",
    ],
  },
  {
    title: "Bikes",
    children: [
      "BMX",
      "Clothing, Shoes & Accessories",
      "Cruiser, Commuter & Hybrid",
      "eBike",
      "Fixie (Single Speed)",
      "Frames & Parts",
      "Kids",
      "Mountain",
      "Road",
      "Other",
    ],
  },
  {
    title: "Books",
    children: [
      "Textbooks",
      "Magazines",
      "Children & Young Adult",
      "Comics & Graphic Novels",
      "Fiction",
      "Non-fiction",
      "Other",
    ],
  },
  {
    title: "Business & Industrial",
    children: [
      "  Industrial Kitchen Supplies",
      "Industrial Shelving & Racking",
      "Storage Containers",
      "Other Business & Industrial",
    ],
  },
  {
    title: "Cameras & Camcorders",
  },
  {
    title: "CDs, DVDs & Blu-ray ",
  },
  {
    title: "Clothing ",
    children: [
      "Costumes",
      "Kids & Youth",
      "Men's",
      "Men's Shoes",
      "Multi-item",
      "Wedding",
      "Women's - Bags & Wallets",
      "Women's - Bottoms",
      "Women's - Dresses & Skirts",
      "Women's - Maternity",
      "Women's - Shoes",
      "Women's - Tops & Outerwear",
      "Women's - Other",
    ],
  },
  {
    title: "Computers",
    children: [
      "Desktop Computers",
      "iPads & Tablets",
      "Laptops",
      "Servers",
      "Other",
    ],
  },
  {
    title: "Computer Accessories",
    children: [
      "Cables & Connectors",
      "Flash Memory & USB Sticks",
      "iPad & Tablet Accessories",
      "Laptop Accessories",
      "Mice, Keyboards & Webcams",
      "Monitors",
      "Networking",
      "Printers, Scanners & Fax",
      "Services (Training & Repair)",
      "Software",
      "Speakers, Headsets & Mics",
      "System Components",
      "Other",
    ],
  },
  {
    title: "Electronics",
    children: ["General Electronics", "Security Systems"],
  },
  {
    title: "Free Stuff",
  },
  {
    title: "Furniture",
    children: [
      "Beds & Mattresses",
      "Bookcases & Shelving Units",
      "Chairs & Recliners",
      "Coffee Tables",
      "Couches & Futons",
      "Desks",
      "Dining Tables & Sets",
      "Dressers & Wardrobes",
      "Hutches & Display Cabinets",
      "Other Tables",
      "TV Tables & Entertainment Units",
      "Multi-item",
      "Other",
    ],
  },
  {
    title: "Garage Sales",
  },
  {
    title: "Health & Special Needs",
  },
  {
    title: "Hobbies & Crafts",
  },
  {
    title: "Home Appliances",
    children: [
      "Coffee Makers",
      "Dishwashers",
      "Freezers",
      "Heaters, Humidifiers & Dehumidifiers",
      "Irons & Garment Steamers",
      "Microwaves & Cookers",
      "Processors, Blenders & Juicers",
      "Refrigerators",
      "Stoves, Ovens & Ranges",
      "Toasters & Toaster Ovens",
      "Vacuums",
      "Washers & Dryers",
      "Other",
    ],
  },
  {
    title: "Home - Indoor",
    children: [
      "Bathwares",
      "Bedding",
      "Fireplace & Firewood",
      "Holiday, Event & Seasonal",
      "Home Décor & Accents",
      "Indoor Lighting & Fans",
      "Kitchen & Dining Wares",
      "Rugs, Carpets & Runners",
      "Storage & Organization",
      "Window Treatments",
      "Other",
    ],
  },
  {
    title: "Home - Outdoor & Garden",
    children: [
      "BBQs & Outdoor Cooking",
      "Decks & Fences",
      "Garage Doors & Openers",
      "Hot Tubs & Pools",
      "Lawnmowers & Leaf Blowers",
      "Outdoor Décor",
      "Outdoor Lighting",
      "Outdoor Tools & Storage",
      "Patio & Garden Furniture",
      "Plants, Fertilizer & Soil",
      "Snowblowers",
      "Other",
    ],
  },
  {
    title: "Home Renovation Materials",
    children: [
      "Cabinets & Countertops",
      "Electrical",
      "Floors & Walls",
      "Hardware, Nails & Screws",
      "Heating, Cooling & Air",
      "Painting & Paint Supplies",
      "Plumbing, Sinks, Toilets & Showers",
      "Roofing",
      "Windows, Doors & Trim",
      "Other",
    ],
  },
  {
    title: "Jewellery & Watches",
  },
  {
    title: "Musical Instruments",
    children: [
      "Amps & Pedals",
      "Brass",
      "Drums & Percussion",
      "Guitars",
      "Performance & DJ Equipment",
      "Pianos & Keyboards",
      "Pro Audio & Recording Equipment",
      "String",
      "Woodwind",
      "Other",
    ],
  },
  {
    title: "Phones",
    children: [
      "Cell Phones",
      "Cell Phone Accessories",
      "Cell Phone Services",
      "Home Phones & Answering Machines",
      "Other",
    ],
  },
  {
    title: "Sporting Goods & Exercise",
    children: [
      "Baseball & Softball",
      "Basketball",
      "Curling",
      "Exercise Equipment",
      "Fishing, Camping & Outdoors",
      "Football",
      "Golf",
      "Hockey",
      "Lacrosse",
      "Paintball",
      "Skates & Blades",
      "Skateboard",
      "Ski",
      "Snowboard",
      "Soccer",
      "Tennis & Racquet",
      "Water Sports",
      "Other",
    ],
  },
  {
    title: "Tickets",
  },
  {
    title: "Tools",
    children: [
      "Hand Tools",
      "Power Tools",
      "Tool Storage & Benches",
      "Ladders & Scaffolding",
      "Other",
    ],
  },

  {
    title: "Toys & Games",
  },
  {
    title: "TVs & Video",
    children: ["TVs", "Video & TV Accessories"],
  },
  {
    title: "Video Games & Consoles",
    children: [
      "Nintendo DS",
      "Nintendo Switch",
      "Nintendo Wii",
      "Nintendo Wii U",
      "Sony Playstation 5",
      "Sony Playstation 4",
      "Sony Playstation 3",
      "Sony PSP & Vita",
      "Xbox Series X & S",
      "XBOX 360",
      "XBOX One",
      "Older Generation",
      "PC Games",
      "Other",
    ],
  },
  {
    title: "Other",
  },
];
const cars = [
  {
    title: "See all in Cars & Vehicles",
  },
  {
    title: "Cars & Trucks",
  },
  {
    title: "Classic Cars",
  },
  {
    title: "Vehicle Parts, Tires & Accessories",
    children: [
      "Audio & GPS",
      "ATV Parts, Trailers & Accessories",
      "Auto Body Parts",
      "Engine & Engine Parts",
      "Heavy Equipment Parts & Accessories",
      "Snowmobiles Parts, Trailers & Accessories",
      "Tires & Rims",
      "RV & Camper Parts & Accessories",
      "Boat Parts, Trailers & Accessories",
      "Transmission & Drivetrain",
      "Other Parts & Accessories",
      "Motorcycle Parts & Accessories",
    ],
  },
  {
    title: "Automotive Services",
    children: [
      "Auto Insurance & Financing",
      "Detailing & Cleaning",
      "Repairs & Maintenance",
      "Towing & Scrap Removal",
      "Other",
    ],
  },
  {
    title: "Motorcycles",
    children: [
      "Dirt Bikes & Motocross",
      "Scooters & Pocket Bikes",
      "Sport Bikes",
      "Sport Touring",
      "Street, Cruisers & Choppers",
      "Touring",
      "Other",
    ],
  },
  {
    title: "ATVs & Snowmobiles",
    children: ["ATVs", "Snowmobiles", "Other"],
  },
  {
    title: "Boats & Watercraft",
    children: [
      "Canoes, Kayaks & Paddles",
      "Powerboats & Motorboats",
      "Sailboats",
      "Personal Watercraft",
      "Other",
    ],
  },
  {
    title: "RVs, Campers & Trailers",
    children: [
      "Cargo & Utility Trailers",
      "Park Models",
      "RVs & Motorhomes",
      "Travel Trailers & Campers",
      "Other",
    ],
  },
  {
    title: "Heavy Equipment",
    children: ["Farming Equipment", "Heavy Equipment", "Heavy Trucks", "Other"],
  },

  {
    title: "Other",
  },
];

const realEstate = [
  {
    title: "For Rent",
    children: [
      "Long Term Rentals",
      "Short Term Rentals",
      "Room Rentals & Roommates",
      "Storage & Parking for Rent",
      "Commercial & Office Space for Rent",
    ],
  },
  {
    title: "For Sale",
    children: [
      "Houses for Sale",
      "Condos for Sale",
      "Land for Sale",
      "Commercial & Office Space for Sale",
    ],
  },
  { title: "Real Estate Services" },
];
const jobs = [
  { title: "Accounting & Management" },
  { title: "Child Care" },
  { title: "Bar, Food & Hospitality" },
  { title: "Cleaning & Housekeeping" },
  { title: "Construction & Trades" },
  { title: "Customer Service" },
  { title: "Cannabis Sector" },
  { title: "Drivers & Security" },
  { title: "General Labour" },
  { title: "Graphic & Web Design" },
  { title: "Healthcare" },
  { title: "Hair Stylist & Salon" },
  { title: "Office Manager & Receptionist" },
  { title: "Part Time & Students" },
  { title: "Programmers & Computer" },
  { title: "Sales & Retail Sales" },
  { title: "TV, Media, & Fashion" },
  { title: "Other" },
];

const services = [
  { title: "Childcare & Nanny" },
  { title: "Cleaners & Cleaning" },
  { title: "Entertainment" },
  { title: "Financial & Legal" },
  { title: "Fitness & Personal Trainer" },
  { title: "Food & Catering" },
  {
    title: "Health & Beauty",
    children: ["Health and Beauty Services", "Massage Services"],
  },
  { title: "Moving & Storage" },
  { title: "Music Lessons" },
  { title: "Photography & Video" },
  {
    title: "Skilled Trades",
    children: [
      "Appliance Repair & Installation",
      "Brick, Masonry & Concrete",
      "Carpentry, Crown Moulding & Trimwork",
      "Drywall & Stucco Removal",
      "Electrician",
      "Excavation, Demolition & Waterproofing",
      "Fence, Deck, Railing & Siding",
      "Flooring",
      "Garage Door",
      "Heating, Ventilation & Air Conditioning",
      "Insulation",
      "Interlock, Paving & Driveways",
      "Lawn, Tree Maintenance & Eavestrough",
      "Painters & Painting",
      "Phone, Network, Cable & Home-wiring",
      "Plumbing",
      "Renovations, General Contracting & Handyman",
      "Roofing",
      "Snow Removal & Property Maintenance",
      "Welding",
      "Windows & Doors",
      "Other",
    ],
  },
  { title: "Tutors & Languages" },
  { title: "Wedding" },
  { title: "Travel & Vacations" },
  { title: "Other" },
];
const pets = [
  { title: "Animal & Pet Services" },
  { title: "Birds for Rehoming" },
  { title: "Cats & Kittens for Rehoming" },
  { title: "Dogs & Puppies for Rehoming" },
  { title: "Equestrian & Livestock Accessories" },
  { title: "Fish for Rehoming" },
  { title: "Horses & Ponies for Rehoming" },
  { title: "Livestock" },
  { title: "Lost & Found" },
  { title: "Accessories" },
  { title: "Reptiles & Amphibians for Rehoming" },
  { title: "Small Animals for Rehoming" },
  { title: "Other Pets for Rehoming" },
  { title: "Registered Shelter / Rescue" },
  { title: "Other" },
];
const community = [
  { title: "Activities & Groups" },
  { title: "Artists & Musicians" },
  { title: "Classes & Lessons" },
  { title: "Events" },
  { title: "Friendship & Networking" },
  { title: "Long Lost Relationships" },
  { title: "Lost & Found" },
  { title: "Missed Connections" },
  { title: "Rideshare" },
  { title: "Sports Teams" },
  { title: "Volunteers" },
  { title: "Other" },
];

const vacation = [
  {
    title: "Canada",
    children: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Other Canada",
    ],
  },
  {
    title: "USA",
    children: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "Washington DC",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
      "Other United States",
    ],
  },
  {
    title: "Caribbean",
    children: [
      "Anguilla",
      "Antigua & Barbuda",
      "Aruba",
      "Bahamas",
      "Barbados",
      "Bay Islands",
      "Bonaire",
      "Cayman Islands",
      "Cuba",
      "Curacao",
      "Dominique",
      "Dominican Republic",
      "Grenada",
      "Guadeloupe",
      "Jamaica",
      "Margarita Island",
      "Martinique",
      "Montserrat",
      "Puerto Rico",
      "Saba",
      "San Andres Providencia",
      "St. Barthelemy",
      "St. Kitts & Nevis",
      "St. Lucia",
      "St. Maarten - St. Martin",
      "Trinidad & Tobago",
      "Turks & Caicos",
      "Virgin Islands",
      "Other Caribbean",
    ],
  },
  { title: "Mexico" },
  { title: "Other Countries" },
];

const HeroNav = () => {
  const { menu, setMenu } = useMenu();
  const [showBusiness, setShowBusiness] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [showRealEstate, setShowRealEstate] = useState(false);
  const [showJobs, setShowJobs] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPets, setShowPets] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [showVacation, setShowVacation] = useState(false);

  //   parentTitle
  const [parentTitle, setParentTitle] = useState(null);
  const [image, setImage] = useState(null);

  //     To show children
  const [selectedItemChildren, setSelectedItemChildren] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  //  Modal
  const [isOpen, setIsOpen] = useState(false);
  //  Mobile Content to show
  const [showBusinessMobile, setShowBusinessMobile] = useState(false);
  const [showCarsMobile, setShowCarsMobile] = useState(false);
  const [showRealEstateMobile, setShowRealEstateMobile] = useState(false);
  const [showJobsMobile, setShowJobsMobile] = useState(false);
  const [showServicesMobile, setShowServicesMobile] = useState(false);
  const [showPetsMobile, setShowPetsMobile] = useState(false);
  const [showCommunityMobile, setShowCommunityMobile] = useState(false);
  const [showVacationMobile, setShowVacationMobile] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleItemHover = (children) => {
    setSelectedItemChildren(children);
  };

  const handleItemClick = (children) => {
    setSelectedItemChildren(children);
  };
  const handleMenuClose = () => {
    setMenu(false);
    setShowBusiness(false);
    setShowCars(false);
    setShowRealEstate(false);
    setShowJobs(false);
    setShowServices(false);
    setShowPets(false);
    setShowCommunity(false);
    setShowVacation(false);
  };

  //  <-----handle Back to Modal   from children Categories -------->
  const handleBackModal = () => {
    if (parentTitle === "Buy & Sell") {
      setShowBusinessMobile(true);
      setSelectedItemChildren(null);
    }
    if (parentTitle === "Cars & Vehicles") {
      setShowCarsMobile(true);
      setSelectedItemChildren(null);
    }
    if (parentTitle === "Real Estate") {
      setShowRealEstateMobile(true);
      setSelectedItemChildren(null);
    }
    if (parentTitle === "Jobs") {
      setShowJobsMobile(true);
      setSelectedItemChildren(null);
    }
    if (parentTitle === "Services") {
      setShowServicesMobile(true);
      setSelectedItemChildren(null);
    }
    if (parentTitle === "Pets") {
      setShowPetsMobile(true);
      setSelectedItemChildren(null);
    }
    if (parentTitle === "Community") {
      setShowCommunityMobile(true);
      setSelectedItemChildren(null);
    }
    if (parentTitle === "Vacation Rentals") {
      setShowVacationMobile(true);
      setSelectedItemChildren(null);
    }
  };

  return (
    <>
      <div
        className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 relative"
        onMouseEnter={() => handleMenuClose()}
      >
        <div className="flex justify-between">
          <div className="flex gap-6 lg:gap-8 overflow-auto w-full flex-nowrap">
            <span
              className="text-primary  font-semibold cursor-pointer transition hover:border-b-[3px] hover:border-solid hover:border-[#56c17c]
            flex-col flex gap-2 text-[12px] shrink-0 lg:text-[15px]
            "
              onMouseOver={() => {
                setMenu(true);
                setShowBusiness(true);
                setShowCommunity(false);
                setShowServices(false);
                setShowJobs(false);
                setShowRealEstate(false);
                setShowPets(false);
                setShowVacation(false);

                setShowCars(false);

                setParentTitle("Buy & Sell");
                setImage(businessImg);
              }}
              onClick={() => {
                toggleModal();

                setShowBusinessMobile(true);
                setShowCommunityMobile(false);
                setShowServicesMobile(false);
                setShowJobsMobile(false);
                setShowRealEstateMobile(false);
                setShowPetsMobile(false);
                setShowVacationMobile(false);
                setShowCarsMobile(false);
                setParentTitle("Buy & Sell");
              }}
            >
              <img
                src="/assets/images/buy-svg.svg"
                alt="buy"
                className="block lg:hidden  w-[24px] h-[24px] self-center"
              />
              <span> Buy & Sell </span>
            </span>
            <span
              className="text-primary text-[12px] lg:text-[15px] font-semibold cursor-pointer transition hover:border-b-[3px] hover:border-solid hover:border-[#56c17c]
            
                flex-col flex gap-2  shrink-0
            "
              onMouseOver={() => {
                setMenu(true);
                setShowBusiness(false);
                setShowCommunity(false);
                setShowServices(false);
                setShowJobs(false);
                setShowRealEstate(false);
                setShowPets(false);
                setShowVacation(false);

                setShowCars(true);

                setParentTitle("Cars & Vehicles");
                setImage(carImg);
              }}
              onClick={() => {
                toggleModal();

                setShowBusinessMobile(false);
                setShowCommunityMobile(false);
                setShowServicesMobile(false);
                setShowJobsMobile(false);
                setShowRealEstateMobile(false);
                setShowPetsMobile(false);
                setShowVacationMobile(false);
                setShowCarsMobile(true);
                setParentTitle("Cars & Vehicles");
              }}
            >
              <img
                src="/assets/images/car-svg.svg"
                alt="buy"
                className="block lg:hidden  w-[24px] h-[24px] self-center"
              />
              <span>Car & Vehicles </span>
            </span>
            <span
              className="text-primary text-[12px] shrink-0 lg:text-[15px] font-semibold cursor-pointer transition hover:border-b-[3px] hover:border-solid hover:border-[#56c17c]
                flex-col flex gap-2
            "
              onMouseOver={() => {
                setMenu(true);
                setShowBusiness(false);
                setShowCommunity(false);
                setShowServices(false);
                setShowJobs(false);
                setShowRealEstate(true);
                setShowPets(false);
                setShowVacation(false);

                setShowCars(false);

                setParentTitle("Real Estate");
                setImage(realEstateImg);
              }}
              onClick={() => {
                toggleModal();

                setShowBusinessMobile(false);
                setShowCommunityMobile(false);
                setShowServicesMobile(false);
                setShowJobsMobile(false);
                setShowRealEstateMobile(true);
                setShowPetsMobile(false);
                setShowVacationMobile(false);
                setShowCarsMobile(false);
                setParentTitle("Real Estate");
              }}
            >
              <img
                src="/assets/images/real-estate-svg.svg"
                alt="buy"
                className="block lg:hidden  w-[24px] h-[24px] self-center"
              />
              <span>Real Estate</span>
            </span>
            <span
              className="text-primary text-[12px] shrink-0 lg:text-[15px] font-semibold cursor-pointer transition hover:border-b-[3px] hover:border-solid hover:border-[#56c17c]
                flex-col flex gap-2
            "
              onMouseOver={() => {
                setMenu(true);
                setShowBusiness(false);
                setShowCommunity(false);
                setShowServices(false);
                setShowJobs(true);
                setShowRealEstate(false);
                setShowPets(false);
                setShowVacation(false);

                setShowCars(false);

                setParentTitle("Jobs");
                setImage(jobImg);
              }}
              onClick={() => {
                toggleModal();

                setShowBusinessMobile(false);
                setShowCommunityMobile(false);
                setShowServicesMobile(false);
                setShowJobsMobile(true);
                setShowRealEstateMobile(false);
                setShowPetsMobile(false);
                setShowVacationMobile(false);
                setShowCarsMobile(false);
                setParentTitle("Jobs");
              }}
            >
              <img
                src="/assets/images/jobs-svg.svg"
                alt="jobs"
                className="block lg:hidden  w-[24px] h-[24px] self-center"
              />
              <span> Jobs</span>
            </span>
            <span
              className="text-primary text-[12px] shrink-0 lg:text-[15px] font-semibold cursor-pointer transition hover:border-b-[3px] hover:border-solid hover:border-[#56c17c]
                flex-col flex gap-2
            "
              onMouseOver={() => {
                setMenu(true);
                setShowBusiness(false);
                setShowCommunity(false);
                setShowServices(true);
                setShowJobs(false);
                setShowRealEstate(false);
                setShowPets(false);
                setShowVacation(false);

                setShowCars(false);

                setParentTitle("Services");
                setImage(servicesImg);
              }}
              onClick={() => {
                toggleModal();

                setShowBusinessMobile(false);
                setShowCommunityMobile(false);
                setShowServicesMobile(true);
                setShowJobsMobile(false);
                setShowRealEstateMobile(false);
                setShowPetsMobile(false);
                setShowVacationMobile(false);
                setShowCarsMobile(false);
                setParentTitle("Services");
              }}
            >
              <img
                src="/assets/images/services-svg.svg"
                alt="buy"
                className="block lg:hidden  w-[24px] h-[24px] self-center"
              />
              <span>Services</span>
            </span>
            <span
              className="text-primary text-[12px] shrink-0 lg:text-[15px] font-semibold cursor-pointer transition hover:border-b-[3px] hover:border-solid hover:border-[#56c17c]
                flex-col flex gap-2
            "
              onMouseOver={() => {
                setMenu(true);
                setShowBusiness(false);
                setShowCommunity(false);
                setShowServices(false);
                setShowJobs(false);
                setShowRealEstate(false);
                setShowPets(true);
                setShowVacation(false);

                setShowCars(false);
                setParentTitle("Pets");
                setImage(petImg);
              }}
              onClick={() => {
                toggleModal();

                setShowBusinessMobile(false);
                setShowCommunityMobile(false);
                setShowServicesMobile(false);
                setShowJobsMobile(false);
                setShowRealEstateMobile(false);
                setShowPetsMobile(true);
                setShowVacationMobile(false);
                setShowCarsMobile(false);
                setParentTitle("Pets");
              }}
            >
              <img
                src="/assets/images/pets-svg.svg"
                alt="pets"
                className="block lg:hidden  w-[24px] h-[24px] self-center"
              />
              <span>Pets</span>
            </span>
            <span
              className="text-primary text-[12px] shrink-0 lg:text-[15px] font-semibold cursor-pointer transition hover:border-b-[3px] hover:border-solid hover:border-[#56c17c]
                flex-col flex gap-2"
              onMouseOver={() => {
                setMenu(true);
                setShowBusiness(false);
                setShowCommunity(true);
                setShowServices(false);
                setShowJobs(false);
                setShowRealEstate(false);
                setShowPets(false);
                setShowVacation(false);

                setShowCars(false);
                setParentTitle("Community");
                setImage(communityImg);
              }}
              onClick={() => {
                toggleModal();

                setShowBusinessMobile(false);
                setShowCommunityMobile(true);
                setShowServicesMobile(false);
                setShowJobsMobile(false);
                setShowRealEstateMobile(false);
                setShowPetsMobile(false);
                setShowVacationMobile(false);
                setShowCarsMobile(false);
                setParentTitle("Community");
              }}
            >
              <img
                src="/assets/images/community-svg.svg"
                alt="community"
                className="block lg:hidden  w-[24px] h-[24px] self-center"
              />
              <span>Community</span>
            </span>
            <span
              className="text-primary text-[12px] shrink-0 lg:text-[15px] font-semibold cursor-pointer transition hover:border-b-[3px] hover:border-solid hover:border-[#56c17c]
                flex-col flex gap-2
            "
              onMouseOver={() => {
                setMenu(true);
                setShowBusiness(false);
                setShowCommunity(false);
                setShowServices(false);
                setShowJobs(false);
                setShowRealEstate(false);
                setShowPets(false);
                setShowVacation(true);

                setShowCars(false);

                setParentTitle("Vacation Rentals");
                setImage(vacationImg);
              }}
              onClick={() => {
                toggleModal();

                setShowBusinessMobile(false);
                setShowCommunityMobile(false);
                setShowServicesMobile(false);
                setShowJobsMobile(false);
                setShowRealEstateMobile(false);
                setShowPetsMobile(false);
                setShowVacationMobile(true);
                setShowCarsMobile(false);

                setParentTitle("Vacation Rentals");
              }}
            >
              <img
                src="/assets/images/vacation-svg.svg"
                alt="buy"
                className="block lg:hidden  w-[24px] h-[24px] self-center"
              />
              <span>Vacation Rentals</span>
            </span>
          </div>
          {/*  right */}
          <div className=" hidden lg:flex flex-col">
            <span className="underline px-[8px] py-[4px] rounded-[4px] bg-[#F8AA17] font-bold text-primary text-[12px]">
              Trending
            </span>
            <a href="#" className="underline text-primary text-[15px]">
              ATVs
            </a>
          </div>
        </div>
        {/*  Menu */}
        <div
          className={`absolute    top-full right-5 w-[calc(100%-32px)] h-[400px] z-10 bg-white ${
            menu ? "hidden lg:flex" : "hidden"
          }
      
        `}
        >
          {/*  categories */}

          <div className="h-full overflow-y-auto custom-scrollbar-container flex flex-col  justify-start basis-[350px] max-w-[350px] min-w-[320px]">
            <span className="flex px-4 py-2 hover:bg-[#ececee]">
              <a
                href="#"
                className="underline hover:no-underline transition   font-semibold  text-[#155e9b] cursor-pointer "
              >
                See all in {parentTitle}
              </a>
            </span>
            {showBusiness &&
              sell.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onMouseEnter={() => {
                    handleItemHover(item.children);
                    setSelectedItem(item);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showCars &&
              cars.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onMouseEnter={() => {
                    handleItemHover(item.children);
                    setSelectedItem(item);
                  }}
                  // onMouseLeave={() => handleItemHover(null)}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showRealEstate &&
              realEstate.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onMouseEnter={() => {
                    handleItemHover(item.children);
                    setSelectedItem(item);
                  }}
                  // onMouseLeave={() => handleItemHover(null)}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showJobs &&
              jobs.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onMouseEnter={() => {
                    handleItemHover(item.children);
                    setSelectedItem(item);
                  }}
                  // onMouseLeave={() => handleItemHover(null)}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showServices &&
              services.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onMouseEnter={() => {
                    handleItemHover(item.children);
                    setSelectedItem(item);
                  }}
                  // onMouseLeave={() => handleItemHover(null)}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showPets &&
              pets.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onMouseEnter={() => {
                    handleItemHover(item.children);
                    setSelectedItem(item);
                  }}
                  // onMouseLeave={() => handleItemHover(null)}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showCommunity &&
              community.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onMouseEnter={() => {
                    handleItemHover(item.children);
                    setSelectedItem(item);
                  }}
                  // onMouseLeave={() => handleItemHover(null)}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showVacation &&
              vacation.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onMouseEnter={() => {
                    handleItemHover(item.children);
                    setSelectedItem(item);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
          </div>
          <div
            className="flex-1 menu-img"
            style={{
              backgroundImage: `  ${
                selectedItemChildren?.length > 11 ? "" : `url(${image})`
              } `,
            }}
          >
            {selectedItemChildren && (
              <div
                className="flex flex-col  px-4  space-y-2 flex-wrap"
                style={{ maxHeight: "100%", overflow: "auto" }}
              >
                <a
                  href="
                #"
                  className="underline hover:no-underline transition   font-semibold  text-[#155e9b] cursor-pointer "
                >
                  See all in {selectedItem.title}
                </a>
                {/* Render the children of the selected item here */}
                {selectedItemChildren.map((item, index) => (
                  <div
                    key={index}
                    className="flex  flex-col gap-2 gap-y-0  flex-wrap"
                    style={{ maxHeight: "100%", overflow: "auto" }}
                  >
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-500 "
                    >
                      {item.replace(/"/g, "")}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed  lg:hidden z-10 inset-0 overflow-y-auto bg-black opacity-50"></div>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed z-20 top-0 left-0 right-0 bottom-0 flex lg:hidden justify-center items-center">
          <div className="bg-white rounded-lg relative overflow-auto shadow-xl max-w-full w-[400px]   sm:w-[600px]  md:w-[700px] h-full custom-sm:h-[90%]">
            <button onClick={toggleModal}>
              <IoClose className="text-gray-500 absolute top-5 right-5 text-[20px]" />
            </button>
            {(showBusinessMobile ||
              showCarsMobile ||
              showCommunityMobile ||
              showJobsMobile ||
              showPetsMobile ||
              showRealEstateMobile ||
              showServicesMobile ||
              showVacationMobile) && (
              <>
                <h4 className="text-primary font-bold text-[20px] px-4">
                  {parentTitle}{" "}
                </h4>
                <span className="flex px-4 py-2 hover:bg-[#ececee]">
                  <a
                    href="#"
                    className="underline hover:no-underline transition   font-semibold  text-[#155e9b] cursor-pointer "
                  >
                    See all in {parentTitle}
                  </a>
                </span>
              </>
            )}
            {showBusinessMobile &&
              sell.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onClick={() => {
                    handleItemClick(item.children);
                    setSelectedItem(item);
                    setShowBusinessMobile(false);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showCarsMobile &&
              cars.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onClick={() => {
                    handleItemClick(item.children);
                    setSelectedItem(item);
                    setShowCarsMobile(false);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showServicesMobile &&
              services.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onClick={() => {
                    handleItemClick(item.children);
                    setSelectedItem(item);
                    setShowServicesMobile(false);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showCommunityMobile &&
              community.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onClick={() => {
                    handleItemClick(item.children);
                    setSelectedItem(item);
                    setShowCommunityMobile(false);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showPetsMobile &&
              pets.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onClick={() => {
                    handleItemClick(item.children);
                    setSelectedItem(item);
                    setShowPetsMobile(false);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showJobsMobile &&
              jobs.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onClick={() => {
                    handleItemClick(item.children);
                    setSelectedItem(item);
                    setShowJobsMobile(false);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showRealEstateMobile &&
              realEstate.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onClick={() => {
                    handleItemClick(item.children);
                    setSelectedItem(item);
                    setShowRealEstateMobile(false);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {showVacationMobile &&
              vacation.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 px-4 hover:bg-[#ececee] cursor-pointer transition "
                  onClick={() => {
                    handleItemClick(item.children);
                    setSelectedItem(item);
                    setShowVacationMobile(false);
                  }}
                >
                  <span className=" text-[15px] text-gray-500 text-center">
                    {item.title}
                  </span>
                  {item.children && (
                    <IoChevronForward className="text-gray-500" />
                  )}
                </div>
              ))}
            {/*   Sub Categories */}
            {selectedItemChildren && (
              <>
                <span
                  className="mb-6  flex flex-row px-4 gap-1 items-center"
                  onClick={handleBackModal}
                >
                  <IoChevronBackOutline className="text-primary" />
                  <span className="text-primary font-normal">
                    Back to {parentTitle}{" "}
                  </span>
                </span>
                <div
                  className="flex flex-col  px-4  space-y-2 "
                  style={{ maxHeight: "100%", overflow: "auto" }}
                >
                  <h4 className="text-primary font-bold text-[20px] ">
                    {selectedItem.title}{" "}
                  </h4>
                  <a
                    href="
                #"
                    className="underline hover:no-underline transition   font-semibold  text-[#155e9b] cursor-pointer "
                  >
                    See all in {selectedItem.title}
                  </a>
                  {/* Render the children of the selected item here */}

                  {selectedItemChildren.map((item, index) => (
                    <div key={index} className="flex  flex-col space-y-6   ">
                      <a
                        href="#"
                        className="hover:underline hover:text-blue-500 text-primary font-normal "
                      >
                        {item.replace(/"/g, "")}
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroNav;
