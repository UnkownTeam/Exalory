import { domainUrl } from "@/constants";
import { User } from "@/types";
import axios from "axios";
import { Dispatch } from "react";

export const handleVerify = async ({
  inputType,
  verifyCode,
  setIsLoading,
  setIsFinish,
  user,
}: TypeProps) => {
  setIsLoading(true);
  if (inputType === "EMAIL") {
    const sendVerify = await axios
      .post(`${domainUrl}/auth/sign-up/verify?id=${user?.id}`, {
        emailCode: parseInt(verifyCode),
      })
      .then((res) => {
        setIsLoading(false);
        setIsFinish(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }
  if (inputType === "PHONE") {
    const sendVerify = await axios
      .post(`${domainUrl}/auth/verify`, {
        phoneCode: parseInt(verifyCode),
      })
      .then((res) => {
        setIsLoading(false);
        setIsFinish(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }
};

type TypeProps = {
  inputType: "EMAIL" | "PHONE";
  verifyCode: string;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  setIsFinish: Dispatch<React.SetStateAction<boolean>>;
  user: User | undefined;
};
