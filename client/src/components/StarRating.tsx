import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }: { rating?: number }) => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <img
              key={i}
              src={rating > i ? assets.starIconFilled : assets.starIconOutlined}
              alt="star"
              className="w-4.5 h-4.5"
            />
          );
        })}
    </>
  );
};

export default StarRating;
