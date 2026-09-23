import { MapControls, OrthographicCamera } from "@react-three/drei";

export const Scene2D = () => {
  return (
    <>
      <OrthographicCamera 
        makeDefault
        position={[0, 10, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        zoom={40}
      />
      <MapControls 
        makeDefault
        enableRotate={false}
        screenSpacePanning={true}
        minZoom={10}
        maxZoom={100}
      />
    </>
  );
};