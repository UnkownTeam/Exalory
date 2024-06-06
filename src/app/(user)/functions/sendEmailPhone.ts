import { domainUrl } from "@/constants";
import { User } from "@/types";
import axios from "axios";
import { Dispatch } from "react";

export const handleSendEmailPhone = async ({
  inputType,
  emailPhone,
  setIsLoading,
  setIsVerify,
  setUser,
}: TypeProps) => {
  setIsLoading(true);
  if (inputType === "EMAIL") {
    const sendEmail = await axios
      .post(`${domainUrl}/auth/sign-up`, {
        email: emailPhone,
        role: "CLIENT",
      })
      .then((res) => {
        setUser(res.data.user);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsVerify(true);
  }
  if (inputType === "PHONE") {
    const sendPhone = await axios
      .post(`${domainUrl}/auth/sign-up`, {
        phone: emailPhone,
        role: "CLIENT",
      })
      .then((res) => {
        setUser(res.data.user);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsVerify(true);
  }
};

type TypeProps = {
  inputType: "EMAIL" | "PHONE";
  emailPhone: string;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  setIsVerify: Dispatch<React.SetStateAction<boolean>>;
  setUser: Dispatch<React.SetStateAction<User | undefined>>;
};
