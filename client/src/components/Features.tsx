import { roomsDummyData } from "../assets/assets";
import Heading from "./Heading";
import HotelCard from "./HotelCard";
import { useNavigate } from "react-router-dom";
const Features = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50">
      <Heading
        align=""
        font=""
        title="Featured Hotels"
        subtitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences"
      />
      <div className="flex flex-wrap gap-5 justify-center items-center px-auto  bg-slate-50 py-20">
        {roomsDummyData.slice(0, 4).map((room, i) => {
          return (
            <HotelCard
              id={room._id}
              image={room.images[0]}
              price={room.pricePerNight}
              key={i}
              index={i}
              name="Urbanza Suites"
              address={"Main Road  123 Street , 23 Colony"}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Hotel s
      </button>
    </div>
  );
};

export default Features;
