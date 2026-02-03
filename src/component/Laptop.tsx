"use client";
import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Projectlap from "@/component/Projectlap";

const Laptop = () => {
  return (
    <div className="h-screen w-full ">
      <Canvas  camera={{ fov: 15, position: [0, -10, 200] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls>
          <Projectlap />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Laptop;
