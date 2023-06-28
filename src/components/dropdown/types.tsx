import { ChangeEvent, ChangeEventHandler } from "react";

export type DropdownComponentProps = {
  title: string;
  datasets: { value: string; label: string }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
