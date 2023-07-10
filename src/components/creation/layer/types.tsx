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
  onAddLayer: (layer: Layer) => void;
  onClose: () => void;
};
