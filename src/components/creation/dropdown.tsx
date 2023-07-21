import React, { FunctionComponent } from "react";
import { ChangeEvent, ChangeEventHandler } from "react";

type DropdownComponentProps = {
  title: string;
  datasets: { value: string; label: string }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const DropdownComponent: FunctionComponent<DropdownComponentProps> =
  function ({ title, datasets, onChange }) {
    return (
      <div className="flex justify-between flex-col gap-2">
        <label className="block">{title}</label>
        <select className="p-4 border border-gray-300" onChange={onChange}>
          {datasets.map((dataset) => (
            <option key={dataset.value} value={dataset.value}>
              {dataset.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
