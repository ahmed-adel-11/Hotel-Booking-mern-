import { useState } from "react";
import Heading from "../components/Heading";
import { assets } from "../assets/assets";

type Images = {
  [key: number]: File | null;
};

const AddRoom = () => {
  const [images, setImages] = useState<Images>({
    "1": null,
    "2": null,
    "3": null,
    "4": null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Free basketball": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });
  return (
    <form>
      <Heading
        align="left"
        font="outfit"
        title="Add Room"
        subtitle=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ea
      voluptate consequuntur dolorum doloremque quo veritatis. Eligendi
      consequatur quae tenetur!"
      />

      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => {
          const numKey = Number(key) as keyof typeof images;
          return (
            <label htmlFor={`roomImage${key}`} key={key}>
              <img
                className="max-h-13 cursor-pointer opacity-80"
                src={
                  images[numKey]
                    ? URL.createObjectURL(images[numKey])
                    : assets.uploadArea
                }
                alt="img"
              />

              <input
                type="file"
                accept="image/*"
                id={`roomImage${key}`}
                hidden
                onChange={(e) => {
                  if (e.target.files === null) {
                    return;
                  }
                  setImages({ ...images, [key]: e.target.files[0] });
                }}
              />
            </label>
          );
        })}
      </div>

      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>

          <select
            id=""
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className="border opacity-70 border=gray-300 mt-1 rounded p-2 w-full"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Room">Family Room</option>
          </select>
        </div>
        <div>
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-24"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: Number(e.target.value) })
            }
          />
        </div>
      </div>
      <p className="text-gray-800 mt-4">Amenities</p>

      <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
        {Object.keys(inputs.amenities).map((amenty, i) => {
          type AmenityKey = keyof typeof inputs.amenities;
          const key = amenty as AmenityKey;

          return (
            <div key={i}>
              <input
                type="checkbox"
                id={`amenities${i + 1}`}
                checked={inputs.amenities[key]}
                onChange={() =>
                  setInputs({
                    ...inputs,

                    amenities: {
                      ...inputs.amenities,
                      [amenty]: !inputs.amenities[key],
                    },
                  })
                }
              />
              <label htmlFor={`amenities${i + 1}`}> {amenty}</label>
            </div>
          );
        })}
      </div>

      <button className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer">
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
