export type Vector3 = [number, number, number];

export type PrimitiveShape = "box" | "sphere" | "cylinder" | "cone";

export interface Transform {
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
};

export interface BaseObject {
  id: string;
  name: string;
  transform: Transform;
  visible: boolean;
};

export interface PrimitiveObject extends BaseObject {
  type: "primitive";
  shape: PrimitiveShape;
  color: string;
};

export type SceneObject = PrimitiveObject;