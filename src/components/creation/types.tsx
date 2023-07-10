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

export type CanvasProps = {
  layers: Layer[];
  input_size: number;
  epochs: number;
  batch_size: number;
  preloaded_dataset: boolean;
  learning_rate: number;
  training_split: number;
  dataset: {
    id: string;
  };
  optimizer: string;
  loss_function: string;
};
