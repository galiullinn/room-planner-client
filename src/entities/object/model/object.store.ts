import type { SceneObject, Transform } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import { create, type StateCreator } from "zustand";

interface Actions {
  addObject: (obj: SceneObject) => void;
  removeObject: (id: string) => void;
  selectObject: (id: string | null) => void;
  updateTransform: (id: string, transform: Partial<Transform>) => void;
};

interface InitialState {
  objects: SceneObject[];
  selectedId: string | null;
};

interface ObjectState extends InitialState, Actions {};

const initialState: InitialState = {
  objects: [
    {
      id: "test-box-1",
      name: "Box 1",
      type: "primitive",
      shape: "box",
      color: "#e74c3c",
      visible: true,
      transform: {
        position: [-2, 0.5, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
    },
    {
      id: "test-box-2",
      name: "Box 2",
      type: "primitive",
      shape: "box",
      color: "#e74678",
      visible: true,
      transform: {
        position: [-5, 0.5, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
    },
  ],
  selectedId: null,
};

const objectStore: StateCreator<ObjectState> = (set) => ({
  ...initialState,
  addObject: (obj: SceneObject) => set((state) => ({ objects: [...state.objects, obj] })),
  removeObject: (id: string) => set((state) => ({
    objects: state.objects.filter((obj) => obj.id !== id),
    selectedId: state.selectedId === id ? null : state.selectedId,
  })),
  selectObject: (id: string | null) => set(() => ({ selectedId: id })),
  updateTransform: (id: string, transform: Partial<Transform>) => set((state) => ({
    objects: state.objects.map((obj) =>
      obj.id === id
        ? {
            ...obj,
            transform: {
              ...obj.transform,
              ...transform,
            },
          }
        : obj
    ),
  })),
});

const useObjectStore = create<ObjectState>()(
  persist(objectStore, {
    name: "objects-store",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({ objects: state.objects }),
  })
);

export const useObjects = () => useObjectStore((state) => state.objects);
export const useSelectedId = () => useObjectStore((state) => state.selectedId);

export const addObject = (obj: SceneObject) => useObjectStore.getState().addObject(obj);
export const removeObject = (id: string) => useObjectStore.getState().removeObject(id);
export const selectObject = (id: string | null) => useObjectStore.getState().selectObject(id);
export const updateTransform = (id: string, transform: Partial<Transform>) =>
  useObjectStore.getState().updateTransform(id, transform);