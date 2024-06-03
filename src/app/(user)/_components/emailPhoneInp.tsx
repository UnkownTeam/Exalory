import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Input } from "@nextui-org/react";

const EmailPhoneInp = ({ inputType }: TypeProps) => {
  return (
    <div className="flex mb-[20px] relative">
      <Input
        label={inputType === "PHONE" ? "Phone Number" : "Email Address"}
        variant="flat"
        labelPlacement="inside"
        type={inputType === "PHONE" ? "tel" : "email"}
        name={inputType}
        id={inputType}
        className=" text-theme-secondary text-[16px] font-semibold leading-none w-[450px]"
        endContent={
          inputType === "PHONE" ? (
            <FiPhone className="text-2xl text-theme-lightMove  pointer-events-none focus:outline-none absolute right-5 top-1/2 -translate-y-1/2" />
          ) : (
            <MdOutlineMail className="text-2xl text-theme-lightMove  pointer-events-none focus:outline-none absolute right-5 top-1/2 -translate-y-1/2" />
          )
        }
      />
    </div>
  );
};

type TypeProps = {
  inputType: "PHONE" | "EMAIL";
};

export default EmailPhoneInp;
