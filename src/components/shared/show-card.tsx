import Image from "next/image";
import Link from "next/link";

interface ShowCardProps {
  image: string;
  id: number;
  name: string;
}

const ShowCard: React.FC<ShowCardProps> = ({ image, id, name }) => {
  const showName = name.split(" ").join("-");
  const url = `/shows/${id}/${showName}`;
  return (
    <Link
      href={url}
      className="duration-300 hover:shadow-[rgba(50,59,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px] h-[220px] w-[188px] relative cursor-pointer"
    >
      <Image
        src={image}
        alt="image"
        fill
        className="hover:scale-105 duration-300"
      />
    </Link>
  );
};

export default ShowCard;
