"use client";
import { Button } from "@nextui-org/react";
import {
  createPassword,
  handleSendEmailPhone,
  handleVerify,
} from "../functions";
import { Dispatch, useState } from "react";
import { User } from "@/types";

const ContinueBtn = ({
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
}: TypeProps) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      className="py-[10px] px-10 text-theme-primary bg-gradient-to-tr from-theme-darkMove to-theme-lightMove rounded-full text-base font-bold tracking-wider"
      onClick={() => {
        if (formType === "SIGNUP") {
          handleSendEmailPhone({
            inputType,
            emailPhone,
            setIsLoading,
            setIsVerify,
            setUser,
          });
        }
        if (isVerify) {
          handleVerify({
            inputType,
            verifyCode,
            setIsLoading,
            setIsFinish,
            user,
          });
        }
        if (isFinish) {
          createPassword({
            password,
            confirmPassword,
            setIsLoading,
          });
        }
      }}
      isLoading={isLoading}
      spinner={
        <svg
          className="animate-spin h-5 w-5 text-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      }
    >
      {isFinish ? "Finish" : "Continue"}
    </Button>
  );
};

type TypeProps = {
  formType: "SIGNIN" | "SIGNUP";
  inputType: "EMAIL" | "PHONE";
  emailPhone: string;
  verifyCode: string;
  user: User | undefined;
  isFinish: boolean;
  isVerify: boolean;
  password: string;
  confirmPassword: string;
  setUser: Dispatch<React.SetStateAction<User | undefined>>;
  setIsVerify: Dispatch<React.SetStateAction<boolean>>;
  setIsFinish: Dispatch<React.SetStateAction<boolean>>;
};

export default ContinueBtn;
