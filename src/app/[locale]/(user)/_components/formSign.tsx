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
import EmailPhoneVerify from "./emailPhoneVerify";
import { User } from "@/types";
import ContinueBtn from "./continueBtn";

const FormSign = ({ formType }: TypeProps) => {
  const [inputType, setInputType] = useState<"EMAIL" | "PHONE">("EMAIL");
  const [emailPhone, setEmailPhone] = useState("");
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isVerify, setIsVerify] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [isFinish, setIsFinish] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSetInputType = () => {
    if (inputType === "EMAIL") {
      setInputType("PHONE");
      setIsVerify(false);
    } else {
      setInputType("EMAIL");
      setIsVerify(false);
    }
  };

  return (
    <form className="pt-14 pb-8 px-8 mt-5 rounded-lg border-form flex flex-col backdrop-blur bg-gradient-to-tr from-[#00000024] via-[#BFBFBF10] to-[#00000024] shadow-xl text-theme-primary">
      <div>
        {isVerify ? (
          isFinish ? (
            ""
          ) : (
            <EmailPhoneVerify
              setVerifyCode={setVerifyCode}
              verifyCode={verifyCode}
              user={user}
            />
          )
        ) : (
          <EmailPhoneInp inputType={inputType} setEmailPhone={setEmailPhone} />
        )}
        {isFinish && (
          <PasswordInput
            isSignUp={isFinish}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}
        {formType === "SIGNIN" && (
          <PasswordInput
            isSignUp={false}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}
      </div>
      <div className="flex justify-center items-center gap-[10px] mb-[20px]">
        <ContinueBtn
          {...{
            formType,
            inputType,
            emailPhone,
            isVerify,
            verifyCode,
            user,
            isFinish,
            password,
            confirmPassword,
            setIsVerify,
            setUser,
            setIsFinish,
          }}
        />
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
