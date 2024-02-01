import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface ShowCardProps {
  image: string;
  id: number;
  name: string;
  type: string;
  runtime?: number;
}

const ShowCard: React.FC<ShowCardProps> = ({
  image,
  id,
  name,
  type,
  runtime,
}) => {
  const showName = name.split(" ").join("-");
  const url = `/shows/${id}/${showName}`;
  return (
    <Link
      href={url}
      className="duration-300 hover:shadow-[rgba(50,59,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px] h-[320px] w-[208px] relative cursor-pointer border border-slate-300"
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={image}
          alt="image"
          fill
          className="hover:scale-105 duration-300"
        />
        <div className="bg-[#3c948b] absolute -bottom-4 w-5/6 px-4 py-2">
          <h3>{name}</h3>
        </div>
      </div>
      <div className=" flex justify-between items-center px-[10px] py-[20px]">
        <div className="flex items-center gap-x-2">
          <div className="h-2 w-2 bg-orange-600 rounded-full"></div>
          <div>{type}</div>
        </div>
        {runtime && (
          <p className="font-medium text-[10px]">{runtime} minutes</p>
        )}
      </div>
      <div className="px-[10px] ">
        <Button>Detailes</Button>
      </div>
    </Link>
  );
};

export default ShowCard;
