import { NumberInputComponentProps } from "../components/landingPage/numberInput/types";

export const inputComponents = [
  {
    title: "Specify the dataset input:",
    type: "number",
    pattern: "[0-9]*",
  },
  {
    title: "Specify Epochs value:",
    type: "number",
    pattern: "[0-9]*",
  },
  {
    title: "Specify the batch size value:",
    type: "number",
    pattern: "[0-9]*",
  },
  {
    title: "Specify the learning rate:",
    type: "number",
    pattern: "[0-9]*[.]?[0-9]*",
  },
];
