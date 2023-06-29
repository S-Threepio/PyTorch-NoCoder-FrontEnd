export type CreationComponentProps = {
  propsData: propsData | null;
};

export type propsData = {
  selectedModel: string;
  selectedDataset: string;
  datasetInput: number;
  epochs: number;
  batchSize: number;
  learningRate: number;
};
