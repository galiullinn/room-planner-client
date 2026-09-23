export type Vector3 = [number, number, number];
export type Vector2 = [number, number];

export type PrimitiveShape = "box" | "sphere" | "cylinder" | "cone" | "plane";

export interface Transform {
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
};

export interface BaseObject<T extends string> {
  id: string;
  type: T;
  name: string;
  transform: Transform;
  visible: boolean;
  locked: boolean;
};

export interface PrimitiveObject extends BaseObject<"primitive"> {
  shape: PrimitiveShape;
  color: string;
};

export type SceneObject = PrimitiveObject;