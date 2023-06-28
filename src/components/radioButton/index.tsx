import React, { FunctionComponent } from "react";
import { RadioButtonComponentProps } from "./types";

const RadioButtonComponent: FunctionComponent<RadioButtonComponentProps> = ({
  title,
  models: options,
}) => {
  return (
    <div>
      <label className="font-semibold">{title}</label>
      <div className="space-x-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="inline-flex justify-center items-center"
          >
            <input type="radio" name="modelType" value={option.value} />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonComponent;
