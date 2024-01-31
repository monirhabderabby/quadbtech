import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-5xl mx-auto h-[80px] items-center flex justify-between">
      <Link href="/">
        <Image
          src="https://static.tvmaze.com/images/tvm-header-logo.png"
          width={158}
          height={50}
          alt="logo"
        />
      </Link>
      <div>Contact</div>
    </div>
  );
};

export default Navbar;
