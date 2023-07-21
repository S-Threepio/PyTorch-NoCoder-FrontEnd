import React, { FunctionComponent, useState } from "react";
import { GenerationProps } from "./types";
import { useLocation } from "react-router-dom";
import { optimizers, lossFunctions } from "../../data/generationData";
import { DropdownComponent } from "../creation/dropdown";

const GenerationComponent: FunctionComponent<GenerationProps | null> = () => {
  const location = useLocation();
  const propsFromLocation = location.state as GenerationProps;

  const [optimizer, setOptimizer] = useState(optimizers[0].value);
  const [lossFunction, setLossFunction] = useState(lossFunctions[0].value);

  const handleButtonClick = () => {
    const { creationComponentProps, layers } = propsFromLocation;
    if (!creationComponentProps || !layers) return; // Return if the required data is not available

    // Creating the JSON object
    const json = {
      layers: layers.map((layer, index) => ({
        ...layer,
        layer_id: (index + 1).toString(), // Assuming the layer_id should start from 1
      })),
      input_size: creationComponentProps.datasetInput, // Replace with the actual input size if available in creationComponentProps
      epochs: creationComponentProps.epochs || 1,
      batch_size: creationComponentProps.batchSize || 7,
      preloaded_dataset: creationComponentProps.preloadedDataset || false,
      learning_rate: creationComponentProps.learningRate || 0.001,
      training_split: creationComponentProps.trainingSplit || 0.7,
      dataset: {
        id: creationComponentProps.selectedDataset || "FashionMNIST",
      },
      optimizer: optimizer,
      loss_function: lossFunction,
    };

    console.log(json);
  };

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-10 bg-[#1B1D2D]">
      <div className="flex flex-col gap-10 w-2/5 justify-center text-xl bg-white p-5">
        <DropdownComponent
          title="Select the Optimizer"
          datasets={optimizers}
          onChange={(e) => setOptimizer(e.target.value)}
        />
        <DropdownComponent
          title="Select the Loss Function"
          datasets={lossFunctions}
          onChange={(e) => setLossFunction(e.target.value)}
        />

        <button
          className="bg-[#38305c] w-max self-center transition-transform ease-in-out duration-200 font-semibold hover:bg-[#141121] hover:scale-105 text-white py-2 my-4 px-4 rounded"
          onClick={handleButtonClick}
        >
          Generate Code
        </button>
      </div>
    </div>
  );
};

export default GenerationComponent;
