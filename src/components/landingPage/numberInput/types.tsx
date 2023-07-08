import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { ChangeEventHandler } from "react";

export type NumberInputComponentProps = {
  title: string;
  type: HTMLInputTypeAttribute;
  pattern: string;
  index: number;
  onChange: (value: string, index: number) => void;
};
