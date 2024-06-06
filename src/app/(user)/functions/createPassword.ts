import { domainUrl } from "@/constants";
import axios from "axios";
import { Dispatch } from "react";

export const createPassword = async ({
  password,
  confirmPassword,
  setIsLoading,
}: TypeProps) => {
  setIsLoading(true);
  if (password !== confirmPassword) {
    console.log("Password not matched");
    return;
  }
  const newPassword = await axios
    .patch(`${domainUrl}/auth/sign-up/enter-password`, {
      password,
    })
    .then((res) => {
      console.log(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
  return newPassword;
};

type TypeProps = {
  password: string;
  confirmPassword: string;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
};
