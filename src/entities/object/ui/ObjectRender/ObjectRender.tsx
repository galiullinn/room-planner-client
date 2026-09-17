import type { SceneObject } from "../../model/types";
import { PrimitiveRender } from "./PrimitiveRender";

interface ObjectRenderProps {
  data: SceneObject;
}

export const ObjectRender = (props: ObjectRenderProps) => {
  const { data } = props;

  switch (data.type) {
    case "primitive":
      return <PrimitiveRender data={data} />;
    default:
      return null;
  }
};