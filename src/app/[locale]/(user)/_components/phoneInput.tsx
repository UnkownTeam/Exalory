import { Input } from "@nextui-org/react";
import { Dispatch } from "react";
import { FiPhone } from "react-icons/fi";

const PhoneInput = ({ setPhone }: TypeProps) => {
  return (
    <div className="flex mb-[20px] relative">
      <Input
        label="Phone Number"
        variant="flat"
        labelPlacement="inside"
        type="tel"
        name="phone"
        id="phone"
        onChange={(e) => setPhone(e.target.value)}
        className=" text-theme-secondary text-[16px] font-semibold leading-none w-[450px]"
        endContent={
          <FiPhone className="text-2xl text-theme-lightMove  pointer-events-none focus:outline-none absolute right-5 top-1/2 -translate-y-1/2" />
        }
      />
    </div>
  );
};

type TypeProps = {
  setPhone: Dispatch<React.SetStateAction<string>>;
};

export default PhoneInput;
