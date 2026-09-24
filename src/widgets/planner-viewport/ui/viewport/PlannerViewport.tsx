import { Canvas } from "@react-three/fiber";
import { Grid, useViewMode } from "@/entities/scene";
import { Scene2D } from "../scenes/Scene2D";
import { Scene3D } from "../scenes/Scene3D";
import { ObjectList, selectObject } from "@/entities/object";
import { EffectComposer, Outline, Selection } from "@react-three/postprocessing";
import { Stats } from "@react-three/drei";
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
      onPointerMissed={() => selectObject(null)}
    >
      <Stats />
      <Selection>

        <EffectComposer autoClear={false} multisampling={8} >
          <Outline
            xRay={true}
            visibleEdgeColor="yellow"
            hiddenEdgeColor="yellow"
            edgeStrength={5}
          />
        </EffectComposer>

        {viewMode === "2d" ? <Scene2D /> : <Scene3D />}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1.2} />
        <Grid />
        <ObjectList />

      </Selection>
    </Canvas>
  );
};