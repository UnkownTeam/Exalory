"use client";
import FacebookIcon from "@/icons/facebookIcon";
import GoogleIcon from "@/icons/googleIcon";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import EmailPhoneInp from "./emailPhoneInp";
import { useState } from "react";
import PasswordInput from "./passwordInput";

const FormSign = ({ formType }: TypeProps) => {
  const [inputType, setInputType] = useState<"EMAIL" | "PHONE">("EMAIL");
  const handleSetInputType = () => {
    if (inputType === "EMAIL") {
      setInputType("PHONE");
    } else {
      setInputType("EMAIL");
    }
  };
  return (
    <form className="pt-14 pb-8 px-8 mt-5 rounded-lg border-form flex flex-col backdrop-blur bg-gradient-to-tr from-[#00000024] via-[#BFBFBF10] to-[#00000024] shadow-xl text-theme-primary">
      <div>
        <EmailPhoneInp inputType={inputType} />
        {formType === "SIGNIN" && <PasswordInput />}
      </div>
      <div className="flex justify-center items-center gap-[10px] mb-[20px]">
        <Button className="py-[10px] px-10 text-theme-primary bg-gradient-to-tr from-theme-darkMove to-theme-lightMove rounded-full text-base font-bold tracking-wider">
          Continue
        </Button>
        <Button
          variant="light"
          className="text-theme-primary rounded-full"
          startContent={inputType === "EMAIL" ? <FiPhone /> : <MdOutlineMail />}
          onClick={handleSetInputType}
        >
          {inputType === "EMAIL"
            ? "Continue With Phone"
            : "Continue With Email"}
        </Button>
      </div>
      <p className="text-lg font-medium text-center mb-5">Or Continue With</p>
      <Divider className="bg-[#E0E2E6] mb-6" />
      <div className="flex flex-col justify-center items-center gap-[10px] mb-8">
        <Button startContent={<GoogleIcon />} className="rounded-full w-[80%]">
          Google
        </Button>
        <Button
          startContent={<FacebookIcon />}
          className="rounded-full w-[80%]"
        >
          Facebook
        </Button>
      </div>
      <p className="text-lg font-medium text-center mb-5">
        {formType === "SIGNIN"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        {formType === "SIGNIN" ? (
          <Link href="/register">Sign Up</Link>
        ) : (
          <Link href="/login">Sign In</Link>
        )}
      </p>
      <div className="flex justify-center gap-5">
        <Link href="/">Terms & Conditions</Link>
        <Link href="/">Support</Link>
        <Link href="/">Customer Care</Link>
      </div>
    </form>
  );
};

type TypeProps = {
  formType: "SIGNUP" | "SIGNIN";
};

export default FormSign;
