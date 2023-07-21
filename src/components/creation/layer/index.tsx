import React, { FC } from "react";
import { Layer } from "./types";

const LayerComponent: FC<Layer> = (layer) => {
  let backgroundColor = "";

  // Assign color based on layer type
  switch (layer.layer_type) {
    case "Flatten":
      backgroundColor = "bg-gray-500";
      break;
    case "Linear":
      backgroundColor = "bg-blue-500";
      break;
    // Add more cases for other layer types
    default:
      backgroundColor = "bg-red-500";
  }

  return (
    <div
      key={layer.layer_id}
      className={`border-2 rounded-md hover:scale-105 transition-transform ease-in-out duration-300 border-black bg-[#23252e] text-gray-300 font-normal min-w-[300px] h-[300px] shadow-2xl p-4 m-2`}
    >
      <div
        className={`relative ${backgroundColor} font-bold w-max text-white rounded-md py-1 px-4 text-base`}
      >
        {layer.layer_type}
      </div>
      <div className="mt-2">Layer Name: {layer.layer_name}</div>
      <div>
        Params:
        <pre>{JSON.stringify(layer.params, null, 2)}</pre>
      </div>
    </div>
  );
};

export default LayerComponent;
