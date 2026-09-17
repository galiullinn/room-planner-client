import { useState } from "react";
import type { SceneObject } from "../../model/types";
import { Mesh } from "three";
import { selectObject, useSelectedId } from "../../model/object.store";
import { useTransformMode } from "@/entities/scene";
import { Outlines, TransformControls } from "@react-three/drei";
import { ObjectRender } from "../ObjectRender/ObjectRender";

interface ObjectItemProps {
  data: SceneObject;
}

export const ObjectItem = (props: ObjectItemProps) => {
  const { data } = props;
  const [meshRef, setMeshRef] = useState<Mesh | null>(null);

  const selectedId = useSelectedId();
  const transformMode = useTransformMode();

  const isSelected = selectedId === data.id;

  return (
    <>
      <mesh
        ref={setMeshRef}
        position={data.transform.position}
        rotation={data.transform.rotation}
        scale={data.transform.scale}
        visible={data.visible}
        onClick={(event) => {
          event.stopPropagation();
          selectObject(data.id);
        }}
      >
        <ObjectRender data={data} />
        {isSelected && <Outlines thickness={2} color="white" />}
      </mesh>
      {isSelected && meshRef && (
        <TransformControls 
          object={meshRef}
          mode={transformMode}
        />
      )}
    </>
  );
};