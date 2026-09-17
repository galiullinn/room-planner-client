import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export const Scene3D = () => {
  return (
    <>
      <PerspectiveCamera 
        makeDefault
        position={[5, 8, 10]}
        fov={50}
      />
      <OrbitControls 
        makeDefault
        maxPolarAngle={Math.PI / 2 - 0.05}
        minDistance={2}
        maxDistance={30}
      />
    </>
  );
};