import type { PrimitiveObject } from "../model/types";

interface PrimitiveObjectMeshProps {
  object: PrimitiveObject;
}

export const PrimitiveObjectMesh = (props: PrimitiveObjectMeshProps) => {
  const { object } = props;

  return (
    <>
      <mesh>
        {object.shape === "box" && <boxGeometry />}
        {object.shape === "cone" && <coneGeometry />}
        {object.shape === "cylinder" && <cylinderGeometry />}
        {object.shape === "plane" && <planeGeometry />}
        {object.shape === "sphere" && <sphereGeometry />}
        <meshStandardMaterial color={object.color} />
      </mesh>
    </>
  );
};