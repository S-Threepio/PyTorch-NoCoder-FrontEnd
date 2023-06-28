import React from "react";
import logo from "./logo.svg";
import RadioButtonComponent from "./components/radioButton";
import { datasets } from "./data/datasets";
import { models } from "./data/models";
import { DropdownComponent } from "./components/dropdown";
import { inputComponents } from "./data/inputComponents";
import { NumberInputComponent } from "./components/numberInput";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <div className="py-4 shadow-lg text-center text-4xl font-semibold">
        UnTorcher
      </div>
      <div className="overflow-auto bg-[#38305c] flex flex-col h-full justify-center items-center text-2xl">
        <div className="flex flex-col w-1/2 px-10 py-5 mx-auto shadow-2xl bg-white">
          <form className="space-y-4">
            <RadioButtonComponent
              title="Which type of ML model would you like to make?"
              models={models}
            />
            <DropdownComponent title={"Select a dataset"} datasets={datasets} />
            {inputComponents.map(({ title, type, pattern }, index) => (
              <NumberInputComponent
                title={title}
                pattern={pattern}
                type={type}
                key={index}
              />
            ))}

            <div className="flex justify-center">
              <button className="bg-[#38305c] transition-transform ease-in-out duration-200 font-semibold hover:bg-[#141121] hover:scale-105 text-white py-2 my-4 px-4 rounded">
                Start Machine Learning
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
