import { ChevronDown, Play } from "lucide-react";
import { useState } from "react";
import GoalDesc from "./GoalDesc";

interface CardProps {
  title: string;
  className?: string;
  img: string;
  goal: any;
}

const Card: React.FC<CardProps> = ({ title, className, img, goal }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="overflow-visible">
      {showModal && <GoalDesc setShowModal={setShowModal} goal={goal} />}
      <div className="flex flex-col max-w-[17.5rem] min-w-[17.5rem] m-2 mx-4 cursor-pointer group relative">
        <div className="col-span-1 cursor-pointer min-w-40 w-full ">
          <div
            className={`relative p-3 h-[160px] flex-col rounded overflow-visible shadow-md
              group-hover:z-10 ${className} transition-transform duration-300 transform group-hover:scale-110`}
          >
            <div className="text-lg font-medium">{title}</div>
            <img
              className="absolute bottom-4 right-4 h-1/3 w-fit"
              src={img}
              alt=""
            />
          </div>
        </div>
        <div
          className="z-20 absolute w-[120%] flex-col -top-2 -left-7 transition-all duration-300 transform scale-95 group-hover:flex opacity-0 group-hover:opacity-100 group-hover:scale-100"
          onClick={() => setShowModal(true)}
        >
          <div className="col-span-1 cursor-pointer min-w-60 w-full rounded-md">
            <div
              className={`relative p-5 h-[160px] flex-col rounded overflow-hidden shadow-md
              ${className}`}
            >
              <div className="text-lg font-medium">{title}</div>
              <img
                className="absolute bottom-4 right-4 h-1/3 w-fit"
                src={img}
                alt=""
              />
            </div>
          </div>
          <div className={`p-3 rounded-b-md shadow-2xl  bg-white z-50`}>
            <div className="flex justify-between gap-3">
              <div className="rounded-full bg-[#59b792] text-white">
                <Play className="m-1" size={22} />
              </div>
              <div className="rounded-full bg-[#59b792] text-white">
                <ChevronDown className="m-1" size={22} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-black text-sm font-medium">
                College Level
              </div>
              <div className="text-[#706D6D] text-xs font-medium">
                Eligibility: 1st to 6th grade
              </div>
            </div>
            <div className="border border-dashed border-[#D9D9D9]"></div>
            <div className="flex flex-col gap-1">
              <div className="text-black text-sm font-medium">Description</div>
              <div className="text-[#706D6D] text-xs font-medium">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit. Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
