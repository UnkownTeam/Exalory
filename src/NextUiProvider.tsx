"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ChildrenProps } from "./types";

const NextProvider = ({ children }: ChildrenProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextProvider;
