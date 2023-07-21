import { FC, FunctionComponent, useRef, useState } from "react";
import { Layer } from "./layer/types";
import LayerComponent from "./layer";
import right from "../../imgs/right.png";
import left from "../../imgs/left.png";
import { CreationComponentProps } from "./types";
import AddLayerDialog from "./layer/add";
import { useNavigate } from "react-router-dom";
import { GenerationProps } from "../generation/types";

export const CreationComponent: FunctionComponent<CreationComponentProps> = (
  propsData
) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [generationProps, setGenerationProps] = useState<GenerationProps>();
  const [layers, setlayers] = useState<Layer[] | null>(null);
  const [showAddLayerDialog, setShowAddLayerDialog] = useState(false);

  const scrollLeft = (sign: number) => {
    if (canvasRef.current) {
      const scrollAmount = 400 * sign; // Adjust the scroll amount as needed
      canvasRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleAddLayer = (newLayer: Layer) => {
    setlayers((prevLayers) => {
      if (prevLayers != null) {
        newLayer.layer_id = prevLayers[prevLayers.length - 1].layer_id + 1;
      }
      console.log(newLayer);
      return [...(prevLayers || []), newLayer];
    });
  };

  const handleAddLayerClick = () => {
    setShowAddLayerDialog(true);
  };

  const handleMoveToModelGeneration = () => {
    const generationProps: GenerationProps = {
      layers: layers,
      creationComponentProps: propsData,
    };
    setGenerationProps(generationProps);
    navigate("/generate", {
      state: generationProps,
    });
  };

  const handleCloseDialog = () => {
    setShowAddLayerDialog(false);
  };
  return (
    <div className="w-full flex-col flex flex-1 text-xl">
      {showAddLayerDialog && (
        <div className="absolute backdrop-blur-sm bg-[#1B1D2D] bg-opacity-40 h-full w-full z-20"></div>
      )}

      <div className="flex-1  items-center justify-center bg-[#1B1D2D] flex flex-col pl-10 gap-2 p-4">
        {layers != null && (
          <div
            ref={canvasRef}
            className="flex gap-10 overflow-x-auto w-full scrollbar-hide"
          >
            {layers.map((layer) => (
              <LayerComponent {...layer} key={layer.layer_id} />
            ))}
          </div>
        )}
        {layers && (
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

        <button
          className="bg-[#38305c] w-max self-center transition-transform ease-in-out duration-200 font-semibold hover:bg-[#141121] hover:scale-105 text-white py-2 my-4 px-4 rounded"
          onClick={handleAddLayerClick}
        >
          Add a Layer
        </button>

        {showAddLayerDialog && (
          <AddLayerDialog
            lastLayer={layers != null ? layers[layers.length - 1] : null}
            onAddLayer={handleAddLayer}
            onClose={handleCloseDialog}
            inputFeatures={propsData.datasetInput}
          />
        )}

        {layers && (
          <button
            className="bg-[#38305c] w-max self-center transition-transform ease-in-out duration-200 font-semibold hover:bg-[#141121] hover:scale-105 text-white py-2 my-4 px-4 rounded"
            onClick={handleMoveToModelGeneration}
          >
            Proceed To Model Generation
          </button>
        )}
      </div>
    </div>
  );
};
