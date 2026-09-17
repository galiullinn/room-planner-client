import { Grid, useViewMode } from "@/entities/scene";
import { Canvas } from "@react-three/fiber";
import { Scene2D } from "../Scene2D/Scene2D";
import { Scene3D } from "../Scene3D/Scene3D";
import styles from "./PlannerViewport.module.css";

interface PlannerViewportProps {
  className?: string;
}

export const PlannerViewport = (props: PlannerViewportProps) => {
  const { className } = props;
  const viewMode = useViewMode();

  return (
    <Canvas 
      className={`${styles.plannerViewport} ${className ?? ""}`}
    >
      {viewMode === "2d" ? <Scene2D /> : <Scene3D />}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} />
      <Grid />
    </Canvas>
  );
};