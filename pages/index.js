import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Floor from "../components/Floor";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import OrbitControls from "../components/OrbitControls";
import Draggable from "../components/Draggable";
import AsciiEffect from "../components/AsciiEffect";
import { Suspense } from "react";

// Great examples:
// https://threejs.org/examples/#webgl_lines_sphere

export default function Home() {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <AsciiEffect />
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
