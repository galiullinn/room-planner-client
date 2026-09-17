import { Grid as GridHelper } from "@react-three/drei";
import { useGridSize, useGridVisible } from "../model/scene.store";

export const Grid = () => {
  const gridVisible = useGridVisible();
  const gridSize = useGridSize();
  
  return (
    <GridHelper
      args={[gridSize, gridSize]}
      position={[0, -0.01, 0]}
      cellSize={0.5}
      cellThickness={0.5}
      cellColor="#6f6f6f"
      sectionSize={1}
      sectionThickness={1.2}
      sectionColor="#9d9d9d"
      fadeDistance={100}
      fadeStrength={1.5}
      infiniteGrid={false}
      visible={gridVisible}
    />
  );
};