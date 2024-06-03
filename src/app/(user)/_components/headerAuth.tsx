"use client";
import CloseIcon from "@/icons/close";
import { useRouter } from "next/navigation";

const HeaderAuth = ({ title }: Props) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center px-[50px] py-[30px]">
      <h1 className="text-5xl font-semibold text-[transparent] bg-clip-text bg-gradient-to-r from-theme-pinkPlus via-theme-pink to-theme-lightPink">
        {title}
      </h1>
      <button onClick={() => router.push("/")}>
        <CloseIcon />
      </button>
    </div>
  );
};

type Props = {
  title: string;
};

export default HeaderAuth;
