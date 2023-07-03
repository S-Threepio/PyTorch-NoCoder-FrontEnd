import React, { FunctionComponent } from "react";
import { DropdownComponentProps } from "./types";

export const DropdownComponent: FunctionComponent<DropdownComponentProps> =
  function ({ title, datasets, onChange }) {
    return (
      <>
        <label className="block font-semibold">{title}</label>
        <select
          className="block w-full bg-[#23252E] border border-gray-300 rounded my-2 p-2 outline-none"
          onChange={onChange}
        >
          {datasets.map((dataset) => (
            <option key={dataset.value} value={dataset.value}>
              {dataset.label}
            </option>
          ))}
        </select>
      </>
    );
  };
