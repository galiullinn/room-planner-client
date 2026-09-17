import type { SceneObject } from "../../model/types";

interface PrimitiveRenderProps {
  data: SceneObject;
}

export const PrimitiveRender = (props: PrimitiveRenderProps) => {
  const { data } = props;

  return (
    <>
      {data.shape === "box" && <boxGeometry args={[1, 1, 1]} />}
      {data.shape === "sphere" && <sphereGeometry args={[0.5, 32, 32]} />}
      {data.shape === "cylinder" && <cylinderGeometry args={[0.5, 0.5, 1, 32]} />}
      {data.shape === "cone" && <coneGeometry args={[0.5, 1, 32]} />}
      <meshBasicMaterial color={data.color} />
    </>
  );
};