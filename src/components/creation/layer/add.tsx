import React, { useState } from "react";
import { AddLayerDialogProps, Layer } from "./types";
import { NumberInputComponent } from "../../landingPage/numberInput";
import Switch from "react-switch";

const AddLayerDialog: React.FC<AddLayerDialogProps> = ({
  lastLayer,
  onAddLayer,
  onClose,
}) => {
  const [layerType, setLayerType] = useState("");
  const [layerId, setLayerId] = useState(0);
  const [layerName, setLayerName] = useState("");
  const [inFeatures, setInFeatures] = useState(
    lastLayer ? lastLayer.params.out_features : ""
  );
  const [outFeatures, setOutFeatures] = useState(0);
  const [bias, setBias] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSliderChange = (checked: boolean) => {
    setBias(checked);
  };

  const handleAddLayer = () => {
    const newLayer: Layer = {
      layer_type: layerType,
      layer_id: lastLayer ? lastLayer.layer_id : 0,
      layer_name: layerName,
      params: {
        in_features: Number(inFeatures),
        out_features: outFeatures,
        bias: bias,
      },
    };

    onAddLayer(newLayer);
    onClose();
  };

  return (
    <div className="absolute flex bg-white p-4 w-1/2 flex-col gap-5 z-50 rounded-lg">
      <div className="grid grid-flow-row grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-2">
          <div>Layer Type</div>
          <input
            type="text"
            placeholder="Layer Type"
            value={layerType}
            className="p-4 border border-gray-300"
            onChange={(e) => setLayerType(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>Layer Name</div>
          <input
            type="text"
            className="p-4 border border-gray-300"
            placeholder="Layer Name"
            value={layerName}
            onChange={(e) => setLayerName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div>Input Features</div>
          <input
            type="number"
            placeholder="Specify the in features"
            readOnly={lastLayer ? true : false}
            title="Specify the input features"
            inputMode="numeric"
            value={lastLayer ? lastLayer.params.out_features : inFeatures}
            className={`block w-full  border appearance-none border-gray-300 rounded p-4
            ${lastLayer ? "bg-gray-400" : ""}`}
            onChange={(e) => {
              setInFeatures(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>Out Features</div>
          <input
            type="number"
            placeholder="Specify the out features"
            pattern="0-9*"
            inputMode="numeric"
            className="block w-full  border appearance-none border-gray-300 rounded p-4"
            onChange={(e) => setOutFeatures(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="items-center flex gap-2 text-gray-800 text-xl">
        <span>Bias</span>
        <Switch
          onChange={handleSliderChange}
          checked={bias}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={24}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
          height={18}
          width={40}
        />
      </div>

      <div className="flex gap-5 self-center">
        <button
          className="bg-[#38305c] w-max self-center transition-transform ease-in-out duration-200 font-semibold hover:bg-[#141121] hover:scale-105 text-white py-2 my-4 px-4 rounded"
          onClick={handleAddLayer}
        >
          Add Layer
        </button>
        <button
          className="bg-[#c93737] w-max self-center transition-transform ease-in-out duration-200 font-semibold hover:bg-[#c41212] hover:scale-105 text-white py-2 my-4 px-4 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddLayerDialog;
