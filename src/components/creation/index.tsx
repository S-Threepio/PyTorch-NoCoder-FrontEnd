import { FC, FunctionComponent, useRef, useState } from "react";
import { CreationComponentProps, Layer } from "./types";
import LayerComponent from "./layer";
import right from "../../imgs/right.png";
import left from "../../imgs/left.png";

export const CreationComponent: FunctionComponent<CreationComponentProps> = (
  propsData
) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const [layers, setlayers] = useState<Layer[] | null>(null);

  const [IsBlur, setIsBlur] = useState(false);
  const scrollLeft = (sign: number) => {
    if (canvasRef.current) {
      const scrollAmount = 400 * sign; // Adjust the scroll amount as needed
      canvasRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const addLayer = () => {
    // Open the dialog box or perform any other action to take input for the new layer
    // Once you have the input values, create a new layer object and update the layers state
    const newLayer: Layer = {
      layer_type: "",
      layer_id: "",
      layer_name: "",
      params: {},
    };
    setlayers((prevLayers) => [...(prevLayers || []), newLayer]);
  };

  return (
    <div className="w-full flex-col flex flex-1 text-xl">
      {IsBlur && <div className="absolute h-full w-full blur-5xl z-20" />}

      <div className="flex-1  items-center justify-center bg-[#1B1D2D] flex flex-col pl-10 gap-2 p-4">
        {layers != null ? (
          <div
            ref={canvasRef}
            className="flex gap-10 overflow-x-auto w-full scrollbar-hide"
          >
            {layers.map((layer) => (
              <LayerComponent {...layer} key={layer.layer_id} />
            ))}
          </div>
        ) : (
          <button
            className="bg-[#38305c] w-max self-center transition-transform ease-in-out duration-200 font-semibold hover:bg-[#141121] hover:scale-105 text-white py-2 my-4 px-4 rounded"
            onClick={addLayer}
          >
            Add a Layer
          </button>
        )}

        {layers != null && layers.length !== 0 && (
          <div className="flex justify-center gap-2 w-full mt-4">
            <img
              src={left}
              className="h-16 w-16 opacity-60 hover:opacity-100 hover:cursor-pointer transition-opacity ease-in-out duration-200 rounded"
              onClick={() => scrollLeft(-1)}
            />

            <img
              src={right}
              className="h-16 w-16 opacity-60 hover:opacity-100 hover:cursor-pointer transition-opacity ease-in-out duration-200 rounded"
              onClick={() => scrollLeft(1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
