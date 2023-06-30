export type Layer = {
  layer_type: string;
  layer_id: string;
  layer_name: string;
  params: {
    [key: string]: any;
  };
};

export type CanvasProps = {
  layers: Layer[];
};
