import React, { FC, FunctionComponent, useRef } from "react";
import { CanvasProps } from "./types";
import LayerComponent from "../layer";
import right from "../../imgs/right.png";
import left from "../../imgs/left.png";

export const CanvasComponent: FunctionComponent<CanvasProps> = ({ layers }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (sign: number) => {
    if (canvasRef.current) {
      const scrollAmount = 400 * sign; // Adjust the scroll amount as needed
      canvasRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex-col flex flex-1">
      <div className="flex-1  items-center justify-center bg-[#1B1D2D] flex flex-col pl-10 gap-2 p-4">
        <div
          ref={canvasRef}
          className="flex gap-10 overflow-x-auto w-full scrollbar-hide"
        >
          {layers.map((layer) => (
            <LayerComponent {...layer} />
          ))}
        </div>
        <div className="flex justify-center gap-2 w-full mt-4">
          <img
            src={left}
            className="h-16 w-16 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-200 rounded"
            onClick={() => scrollLeft(-1)}
          />

          <img
            src={right}
            className="h-16 w-16 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-200 rounded"
            onClick={() => scrollLeft(1)}
          />
        </div>
      </div>
    </div>
  );
};
