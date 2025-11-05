import React from "react";
import { ChevronLeft } from "lucide-react";

interface DashboardProps {
  onBack?: () => void;
}

export const Dashboard = ({ onBack }: DashboardProps): JSX.Element => {
  const categories = [
    {
      title: "Skins",
      image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
    {
      title: "F. Crew",
      image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
    {
      title: "V-bucks",
      image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
    {
      title: "Other services",
      image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="border border-solid border-black bg-[linear-gradient(0deg,rgba(56,122,158,1)_0%,rgba(56,122,158,1)_100%)] w-full min-w-[338px] min-h-screen flex flex-col items-center px-4 py-6">
      <button onClick={onBack} className="w-full max-w-[305px] flex justify-start mb-6">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <div className="relative w-full max-w-[305px] h-40 mb-8 rounded-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
          alt="Welcome banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="[font-family:'Inria_Serif',Helvetica] text-white text-4xl font-bold leading-tight">
              Welcome
              <br />
              user
            </h1>
          </div>
        </div>
      </div>

      <p className="[font-family:'Inria_Serif',Helvetica] text-black text-base font-bold mb-6 w-full max-w-[305px]">
        What would you like today?
      </p>

      <div className="w-full max-w-[305px] grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="relative h-32 rounded-3xl overflow-hidden group hover:opacity-90 transition-opacity"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-cyan-300/80 group-hover:bg-cyan-300/70 transition-colors flex items-center justify-center">
              <span className="[font-family:'Inria_Serif',Helvetica] text-teal-700 text-base font-bold">
                {category.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
