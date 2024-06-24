import { Input } from "@nextui-org/react";
import { Dispatch } from "react";
import { MdOutlineMail } from "react-icons/md";

const EmailInput = ({ setEmail }: TypeProps) => {
  return (
    <div className="flex mb-[20px] relative">
      <Input
        label="Email Address"
        variant="flat"
        labelPlacement="inside"
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        className=" text-theme-secondary text-[16px] font-semibold leading-none w-[450px]"
        endContent={
          <MdOutlineMail className="text-2xl text-theme-lightMove  pointer-events-none focus:outline-none absolute right-5 top-1/2 -translate-y-1/2" />
        }
      />
    </div>
  );
};

type TypeProps = {
  setEmail: Dispatch<React.SetStateAction<string>>;
};

export default EmailInput;
