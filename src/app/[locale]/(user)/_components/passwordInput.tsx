"use client";
import { Input } from "@nextui-org/react";
import { Dispatch, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const PasswordInput = ({
  isSignUp,
  setPassword,
  setConfirmPassword,
}: TypeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <Input
        label="Password"
        variant="flat"
        labelPlacement="inside"
        onChange={(e) => setPassword(e.target.value)}
        endContent={
          <button
            className="focus:outline-none absolute right-5 top-1/2 -translate-y-1/2"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <IoEyeOutline className="text-2xl text-theme-lightMove  pointer-events-none" />
            ) : (
              <IoEyeOffOutline className="text-2xl text-theme-lightMove pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="w-[450px] mb-5 relative"
      />
      {isSignUp && (
        <Input
          label="Confirm Password"
          variant="flat"
          labelPlacement="inside"
          onChange={(e) => setConfirmPassword(e.target.value)}
          endContent={
            <button
              className="focus:outline-none absolute right-5 top-1/2 -translate-y-1/2"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <IoEyeOutline className="text-2xl text-theme-lightMove  pointer-events-none" />
              ) : (
                <IoEyeOffOutline className="text-2xl text-theme-lightMove pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="w-[450px] mb-5 relative"
        />
      )}
    </>
  );
};

type TypeProps = {
  isSignUp: boolean;
  setPassword: Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: Dispatch<React.SetStateAction<string>>;
};

export default PasswordInput;
