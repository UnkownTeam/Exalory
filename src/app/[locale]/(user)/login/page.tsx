import { Divider } from "@nextui-org/react";
import { Roboto } from "next/font/google";
import HeaderAuth from "../_components/headerAuth";
import SideAuth from "../_components/sideAuth";
import FormSign from "../_components/formSign";
import CircleOne from "@/assets/circleOne";
import CircleTwo from "@/assets/circleTwo";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
const Register = () => {
  return (
    <div className={`${roboto.className} h-screen bg-theme-darkPlus`}>
      <div className="absolute left-[50%] translate-x-[-40%] top-[140px]">
        <CircleOne />
      </div>
      <div className="absolute right-[20px] bottom-[20px]">
        <CircleTwo />
      </div>
      <HeaderAuth title="Sign In" />
      <Divider className="absolute w-[90%] left-1/2 bg-[#9353D3] -translate-x-1/2" />
      <div className="flex items-end justify-around px-10">
        <SideAuth />
        <FormSign formType="SIGNIN" />
      </div>
    </div>
  );
};

export default Register;
