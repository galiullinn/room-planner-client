import type { SceneObject, Transform } from "@/entities/object";

export interface CatalogItem {
  id: string;
  label: string;
  description: string;
  shape: "box" | "sphere" | "cylinder" | "cone";
  color: string;
  preview?: string;
  create: () => SceneObject;
}

const generateId = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `obj-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
};

const baseTransform: Transform = {
  position: [0, 0.5, 0],
  rotation: [0, 0, 0],
  scale: [1, 1, 1],
};

export const objectCatalog: CatalogItem[] = [
  {
    id: "box",
    label: "Куб",
    description: "1 × 1 × 1 м",
    shape: "box",
    color: "#3b82f6",
    create: () => ({
      id: generateId(),
      name: "Куб",
      type: "primitive",
      shape: "box",
      color: "#3b82f6",
      visible: true,
      transform: { ...baseTransform },
    }),
  },
  {
    id: "sphere",
    label: "Сфера",
    description: "Радиус 0.5 м",
    shape: "sphere",
    color: "#10b981",
    create: () => ({
      id: generateId(),
      name: "Сфера",
      type: "primitive",
      shape: "sphere",
      color: "#10b981",
      visible: true,
      transform: { ...baseTransform },
    }),
  },
  {
    id: "cylinder",
    label: "Цилиндр",
    description: "Ø 1 м × 1 м",
    shape: "cylinder",
    color: "#f59e0b",
    create: () => ({
      id: generateId(),
      name: "Цилиндр",
      type: "primitive",
      shape: "cylinder",
      color: "#f59e0b",
      visible: true,
      transform: { ...baseTransform },
    }),
  },
  {
    id: "cone",
    label: "Конус",
    description: "Ø 1 м × 1 м",
    shape: "cone",
    color: "#8b5cf6",
    create: () => ({
      id: generateId(),
      name: "Конус",
      type: "primitive",
      shape: "cone",
      color: "#8b5cf6",
      visible: true,
      transform: { ...baseTransform },
    }),
  },
];