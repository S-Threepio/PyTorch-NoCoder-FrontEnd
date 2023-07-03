import React, { FunctionComponent, useEffect } from "react";
import { CreationComponentProps } from "./types";
import { canvasProps } from "../../data/layersData";
import { CanvasComponent } from "../canvas";

const CreationComponent: FunctionComponent<CreationComponentProps> = ({
  propsData,
}) => {
  return (
    <div className="flex flex-col items-center h-full text-xl font-semibold">
      <CanvasComponent layers={canvasProps.layers} />
      {/* <div className="bottombar w-full p-10"></div> */}
    </div>
  );
};

export default CreationComponent;
