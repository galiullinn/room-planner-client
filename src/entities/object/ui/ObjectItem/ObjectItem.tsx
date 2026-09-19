import { useState } from "react";
import type { SceneObject } from "../../model/types";
import { Mesh } from "three";
import { selectObject, updateTransform, useSelectedId } from "../../model/object.store";
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

  const handleMouseUp = () => {
    if (!meshRef) return;

    updateTransform(data.id, {
      position: [
        Math.round(meshRef.position.x * 1000) / 1000,
        Math.round(meshRef.position.y * 1000) / 1000,
        Math.round(meshRef.position.z * 1000) / 1000,
      ],
      rotation: [
        Math.round(meshRef.rotation.x * 1000) / 1000,
        Math.round(meshRef.rotation.y * 1000) / 1000,
        Math.round(meshRef.rotation.z * 1000) / 1000,
      ],
      scale: [
        Math.round(meshRef.scale.x * 1000) / 1000,
        Math.round(meshRef.scale.y * 1000) / 1000,
        Math.round(meshRef.scale.z * 1000) / 1000,
      ],
    });
  };

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
        {isSelected ? (
          <Outlines thickness={2.5} color="#ffffff" />
        ) : (
          <Outlines thickness={1.2} color="#1e293b" opacity={0.5} transparent />
        )}
      </mesh>
      {isSelected && meshRef && (
        <TransformControls
          object={meshRef}
          mode={transformMode}
          onMouseUp={handleMouseUp}
        />
      )}
    </>
  );
};