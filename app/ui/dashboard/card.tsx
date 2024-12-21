import React from "react";
import Image from "next/image";
import pencils from "../../../public/writing-png-34769.png";

interface CardProps {
  thumbnail?: string;
  title?: string;
  description?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  thumbnail = "",
  title = "Project 1",
  description = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  className = "",
}) => {
  return (
    <div
      className={`w-80 h-52 max-w-sm rounded-md overflow-auto p-0 ${className}`}
    >
      <div className="flex flex-none justify-center">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt="Thumbnail"
            className="w-full object-cover rounded-xl"
          />
        ) : (
          <div className="bg-gradient-to-br from-slate-900 to-gray-600 w-full h-52 flex flex-col justify-end items-start pl-1">
            <div className="flex justify-end w-full pt-1 pr-1">
              <Image src={pencils} alt="Thumbnail" width={60} height={60} />
            </div>
            <div className="p-2">
              <h2 className="text-lg font-bold text-white">{title}</h2>
              <p className="text-white">{description}</p>
            </div>
          </div>
        )}
      </div>
      {/* <h2 className="text-lg font-bold mb-2 text-black">{title}</h2> */}
      {/* <p className="text-black">{description}</p> */}
    </div>
  );
};

export default Card;
