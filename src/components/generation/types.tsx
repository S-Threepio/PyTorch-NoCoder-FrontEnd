import { CreationComponentProps } from "../creation/types";

import { Layer } from "../creation/layer/types";

export type GenerationProps = {
  creationComponentProps?: CreationComponentProps | null;
  layers?: Layer[] | null;
};
