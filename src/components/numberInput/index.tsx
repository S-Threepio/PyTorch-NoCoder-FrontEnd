import React, { FunctionComponent, HTMLInputTypeAttribute } from "react";
import { NumberInputComponentProps } from "./types";

export const NumberInputComponent: FunctionComponent<
  NumberInputComponentProps
> = ({ title, type, pattern }) => {
  return (
    <>
      <label className="block font-semibold">{title}</label>
      <input
        type={type}
        pattern={pattern}
        inputMode="numeric"
        className="block w-full border border-gray-300 rounded my-2 p-2"
      />
    </>
  );
};
