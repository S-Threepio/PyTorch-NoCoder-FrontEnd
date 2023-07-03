import React, { ChangeEvent, FunctionComponent } from "react";
import { NumberInputComponentProps } from "./types";

export const NumberInputComponent: FunctionComponent<
  NumberInputComponentProps
> = ({ title, type, pattern, onChange, index }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value, index);
  };

  return (
    <>
      <label className="block font-semibold">{title}</label>
      <input
        type={type}
        pattern={pattern}
        inputMode="numeric"
        className="block w-full bg-[#23252E] border appearance-none border-gray-300 rounded my-2 p-2"
        onChange={handleInputChange}
      />
    </>
  );
};
