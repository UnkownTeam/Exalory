import { domainUrl } from "@/constants";
import axios from "axios";
import { Dispatch } from "react";

export const signUpWithPhone = async ({ phone, setIsLoading }: TypeProps) => {
  setIsLoading(true);

  const response = await axios
    .post(`${domainUrl}/auth/sign-up/phone`, {
      phone,
    })
    .then((res) => {
      console.log(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

type TypeProps = {
  phone: string;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
};
