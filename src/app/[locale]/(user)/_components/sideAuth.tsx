import Image from "next/image";
import Logo from "@/assets/logo";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const SideAuth = () => {
  return (
    <div className="relative self-baseline">
      <h1
        className={`${righteous.className} flex items-center text-theme-primary py-[25px] gap-3`}
      >
        <span className="text-[45px] leading-none">Welcome to</span> <Logo />
      </h1>
      <div className="relative w-fit">
        <span className="block absolute bg-gradient-to-t from-theme-lightMove via-theme-lightPink to-theme-pinkPlus top-[-10px] right-[-20px] w-[120px] h-[490px]"></span>
        <Image
          src="/image_auth.svg"
          alt="image_auth"
          priority
          className="w-[360px] h-[470px] relative z-10"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default SideAuth;
