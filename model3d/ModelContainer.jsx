import React, { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "./Model.jsx";

export default function ModelContainer() {
  return (
    <LazyLoadComponent>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <ambientLight />
        <Suspense fallback={null}>
          <Stage
            preset="rembrandt"
            intensity={1}
            shadows={false}
            environment="city"
          >
            <Model />
          </Stage>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </LazyLoadComponent>
  );
}
