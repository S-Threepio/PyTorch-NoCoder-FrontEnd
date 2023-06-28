import { FunctionComponent } from "react";
import { RadioButtonComponentProps } from "./types";

const RadioButtonComponent: FunctionComponent<RadioButtonComponentProps> = ({
  title,
  models,
  onChange,
  model,
}) => {
  return (
    <div>
      <label className="font-semibold">{title}</label>
      <div className="space-x-4">
        {models.map((option) => (
          <label
            key={option.value}
            className="inline-flex justify-center items-center"
          >
            <input
              type="radio"
              name="modelType"
              value={option.value}
              onChange={onChange}
              checked={option.value === model}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonComponent;
