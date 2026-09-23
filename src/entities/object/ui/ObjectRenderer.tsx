import type { SceneObject } from "../model/types";
import { ObjectInteraction } from "./ObjectInteraction";
import { PrimitiveObjectMesh } from "./PrimitiveObjectMesh";

interface ObjectRendererProps {
  object: SceneObject;
}

const renderMesh = (object: SceneObject) => {
  switch (object.type) {
    case "primitive":
      return <PrimitiveObjectMesh object={object} />;
    default:
      return null;
  }
};

export const ObjectRenderer = (props: ObjectRendererProps) => {
  const { object } = props;
  
  if (!object.visible) return null;

  const mesh = renderMesh(object);
  if (!mesh) return null;

  return <ObjectInteraction object={object}>{mesh}</ObjectInteraction>;
};