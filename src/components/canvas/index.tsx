import React, { FC, FunctionComponent } from "react";
import { CanvasProps } from "./types";

export const CanvasComponent: FunctionComponent<CanvasProps> = ({ layers }) => {
  return (
    <div className="w-full overflow-x-auto items-center flex flex-1 border-2 pl-10 gap-20 p-4">
      {layers.map((layer) => (
        <div
          key={layer.layer_id}
          className="border-2 font-normal min-w-[300px] h-[300px] border-gray-400 p-4 m-2"
        >
          <div>Layer Type: {layer.layer_type}</div>
          <div>Layer ID: {layer.layer_id}</div>
          <div>Layer Name: {layer.layer_name}</div>
          <div>
            Params:
            <pre>{JSON.stringify(layer.params, null, 2)}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};
