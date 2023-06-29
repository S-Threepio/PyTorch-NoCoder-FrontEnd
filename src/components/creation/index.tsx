import React, { FunctionComponent, useEffect } from "react";
import { CreationComponentProps } from "./types";

const CreationComponent: FunctionComponent<CreationComponentProps> = ({
  propsData,
}) => {
  return (
    <div className="flex flex-col items-center text-xl font-semibold">
      <span className="text-6xl font-extrabold">Creation Component</span>
      <span>Selected Model: {propsData?.selectedModel}</span>
      <span>Selected Dataset: {propsData?.selectedDataset}</span>
      <span>Dataset Input: {propsData?.datasetInput}</span>
      <span>Epochs: {propsData?.epochs}</span>
      <span>Batch Size: {propsData?.batchSize}</span>
      <span>Learning Rate: {propsData?.learningRate}</span>
    </div>
  );
};

export default CreationComponent;
