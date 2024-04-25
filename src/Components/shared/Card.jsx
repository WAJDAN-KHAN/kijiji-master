/* eslint-disable react/prop-types */

const Card = ({ car }, props) => {
  return (
    <div className="rounded-sm relative group cursor-pointer" {...props}>
      <img
        src={car.image}
        alt={car.title}
        className="w-full h-full object-cover rounded-sm"
      />
      {car.title !== "" && (
        <p
          className="text-[14px] sm:text-[16px] p-[5px] rounded-[2px] w-[80%] max-w-max  mx-auto bg-primary/80 text-white font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  group-hover:bg-white group-hover:text-primary transition-all
                text-center
                "
        >
          {car.title}
        </p>
      )}
    </div>
  );
};

export default Card;
