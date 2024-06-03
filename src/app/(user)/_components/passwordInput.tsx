"use client";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const PasswordInput = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      label="Password"
      variant="flat"
      labelPlacement="inside"
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
  );
};

export default PasswordInput;
