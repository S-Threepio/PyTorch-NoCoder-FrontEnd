import { CanvasProps } from "../components/canvas/types";

export const canvasProps: CanvasProps = {
  layers: [
    {
      layer_type: "Flatten",
      layer_id: "1",
      layer_name: "fl",
      params: {},
    },
    {
      layer_type: "Linear",
      layer_id: "2",
      layer_name: "fc1",
      params: {
        in_features: 784,
        out_features: 100,
        bias: true,
      },
    },
    {
      layer_type: "Linear",
      layer_id: "3",
      layer_name: "fc2",
      params: {
        in_features: 100,
        out_features: 10,
        bias: true,
      },
    },
    {
      layer_type: "Linear",
      layer_id: "2",
      layer_name: "fc1",
      params: {
        in_features: 784,
        out_features: 100,
        bias: true,
      },
    },
    {
      layer_type: "Linear",
      layer_id: "3",
      layer_name: "fc2",
      params: {
        in_features: 100,
        out_features: 10,
        bias: true,
      },
    },
    {
      layer_type: "Linear",
      layer_id: "2",
      layer_name: "fc1",
      params: {
        in_features: 784,
        out_features: 100,
        bias: true,
      },
    },
    {
      layer_type: "Linear",
      layer_id: "3",
      layer_name: "fc2",
      params: {
        in_features: 100,
        out_features: 10,
        bias: true,
      },
    },
    {
      layer_type: "Linear",
      layer_id: "2",
      layer_name: "fc1",
      params: {
        in_features: 784,
        out_features: 100,
        bias: true,
      },
    },
    {
      layer_type: "Linear",
      layer_id: "3",
      layer_name: "fc2",
      params: {
        in_features: 100,
        out_features: 10,
        bias: true,
      },
    },
  ],
};
