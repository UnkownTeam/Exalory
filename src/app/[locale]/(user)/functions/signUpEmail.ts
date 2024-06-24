import { domainUrl } from "@/constants";
import axios from "axios";
import { Dispatch } from "react";

export const signUpWithEmail = async ({ email, setIsLoading }: TypeProps) => {
  setIsLoading(true);
  const response = await axios
    .post(`${domainUrl}/auth/sign-up/email`, {
      email,
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
  email: string;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
};
