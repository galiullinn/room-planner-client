import type { SceneObject } from "../model/types";
import { selectObject, updateTransform, useSelectedId } from "../model/object.store";
import { useState, type ReactNode } from "react";
import { Group } from "three";
import { TransformControls } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { useGridStep, useSnapToGrid, useTransformMode } from "@/entities/scene";

interface ObjectInteractionProps {
  object: SceneObject;
  children: ReactNode;
}

export const ObjectInteraction = (props: ObjectInteractionProps) => {
  const { object, children } = props;
  const [group, setGroup] = useState<Group | null>(null);

  const selectedId = useSelectedId();
  const transformMode = useTransformMode();
  const snapToGrid = useSnapToGrid();
  const gridStep = useGridStep();

  const isSelected = selectedId === object.id;

  const handleTransform = () => {
    if (!group) return;
    updateTransform(object.id, {
      position: [group.position.x, group.position.y, group.position.z],
      rotation: [group.rotation.x, group.rotation.y, group.rotation.z],
      scale: [group.scale.x, group.scale.y, group.scale.z],
    });
  };

  return (
    <>
      <Select 
        enabled={isSelected}
      >
        <group
          ref={setGroup}
          position={object.transform.position}
          rotation={object.transform.rotation}
          scale={object.transform.scale}
          onClick={(event) => {
            event.stopPropagation();
            selectObject(object.id);
          }}
        >
          {children}
        </group> 
      </Select>

      {isSelected && !object.locked && group && (
        <TransformControls 
          object={group}
          mode={transformMode}
          translationSnap={snapToGrid ? gridStep : null}
          onMouseUp={handleTransform}
        />
      )}
    </>
  );
};