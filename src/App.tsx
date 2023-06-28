import React, { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import RadioButtonComponent from "./components/radioButton";
import { datasets } from "./data/datasets";
import { models } from "./data/models";
import { DropdownComponent } from "./components/dropdown";
import { inputComponents } from "./data/inputComponents";
import { NumberInputComponent } from "./components/numberInput";

function App() {
  // State variables to hold the selected/entered values
  const [selectedModel, setSelectedModel] = useState<string | null>(
    models[0].value
  ); // Set the first model as the default
  const [selectedDataset, setSelectedDataset] = useState<string | null>(
    datasets[0].value
  ); // Set the first dataset as the default
  const [inputValues, setInputValues] = useState<String[]>([]);

  // Callback functions to update the state variables
  const handleModelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedModel(event.target.value);
  };

  const handleDatasetChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDataset(event.target.value);
  };

  const handleInputChange = (index: number, value: String) => {
    setInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  // Function to handle the button click
  const handleButtonClick = () => {
    // Access the selected/entered values here
    const [dataset, epochs, batch_size, learning_rate] = inputValues;
    console.log("Selected Model:", selectedModel);
    console.log("Selected Dataset:", selectedDataset);
    console.log("Dataset:", dataset);
    console.log("Epochs:", epochs);
    console.log("Batch Size:", batch_size);
    console.log("Learning Rate:", learning_rate);
  };

  return (
    <div className="App flex flex-col h-screen">
      <div className="py-4 shadow-lg text-center text-4xl font-semibold">
        UnTorcher
      </div>

      <div className="overflow-auto bg-[#38305c] flex flex-col h-full justify-center items-center text-2xl">
        <div className="flex flex-col w-1/2 px-10 py-5 mx-auto shadow-2xl bg-white">
          <RadioButtonComponent
            title="Which type of ML model would you like to make?"
            models={models}
            onChange={handleModelChange}
            model = {selectedModel}
          />
          <DropdownComponent
            title={"Select a dataset"}
            datasets={datasets}
            onChange={handleDatasetChange}
          />
          {inputComponents.map(({ title, type, pattern }, index) => (
            <NumberInputComponent
              title={title}
              pattern={pattern}
              type={type}
              key={index}
              index={index}
              onChange={(value) => handleInputChange(index, value)}
            />
          ))}

          <button
            className="bg-[#38305c] w-max self-center transition-transform ease-in-out duration-200 font-semibold hover:bg-[#141121] hover:scale-105 text-white py-2 my-4 px-4 rounded"
            onClick={handleButtonClick}
          >
            Start Machine Learning
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
