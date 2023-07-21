import { Layer } from "./layer/types";

export type CreationComponentProps = {
  selectedModel: string;
  selectedDataset: string;
  datasetInput: number;
  epochs: number;
  batchSize: number;
  learningRate: number;
  preloadedDataset: boolean;
  trainingSplit: number;
  optimizer: string;
  lossFunction: string;
};

