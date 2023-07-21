export type Layer = {
  layer_type: string;
  layer_id: number;
  layer_name: string;
  params: {
    [key: string]: any;
  };
};

export type AddLayerDialogProps = {
  lastLayer: Layer | null;
  inputFeatures : Number;
  onAddLayer: (layer: Layer) => void;
  onClose: () => void;
};
