import { ChangeEvent, ChangeEventHandler } from "react";

export type RadioButtonComponentProps = {
  title: string;
  models: { value: string; label: string }[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  model: String | null;
};
