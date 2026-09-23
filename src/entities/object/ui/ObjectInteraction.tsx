import type { SceneObject } from "../model/types";
import { selectObject, useSelectedId } from "../model/object.store";
import { useState, type ReactNode } from "react";
import { Group } from "three";
import { TransformControls } from "@react-three/drei";

interface ObjectInteractionProps {
  object: SceneObject;
  children: ReactNode;
}

export const ObjectInteraction = (props: ObjectInteractionProps) => {
  const { object, children } = props;
  const [group, setGroup] = useState<Group | null>(null);
  const selectedId = useSelectedId();

  const isSelected = selectedId === object.id;

  return (
    <>
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

      {isSelected && !object.locked && group && (
        <TransformControls 
          object={group}
          mode="translate"
        />
      )}
    </>
  );
};