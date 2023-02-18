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
// https://threejs.org/examples/#webgl_loader_pcd
// https://threejs.org/examples/#webgl_loader_texture_lottie
// https://threejs.org/examples/#webgl_loader_xyz
// https://threejs.org/examples/#webgl_materials_wireframe
// https://threejs.org/examples/#webgl_multiple_elements_text
// https://threejs.org/examples/#webgl_multiple_scenes_comparison
// https://threejs.org/examples/#webgl_points_dynamic
// https://threejs.org/examples/#webgl_points_waves
// https://threejs.org/examples/#webgl_raycaster_bvh
// https://threejs.org/examples/#webgl_shader
// https://threejs.org/examples/#webgl_shader_lava
// https://threejs.org/examples/#webgl_shaders_tonemapping
// https://threejs.org/examples/#webgl_shadowmap_pointlight
// https://threejs.org/examples/#webgl_tonemapping
// https://threejs.org/examples/#webgl_video_kinect
// https://threejs.org/examples/#webgl_nodes_materials_instance_uniform
// https://threejs.org/examples/#webgl_nodes_playground
// https://threejs.org/examples/#webgl_nodes_points
// https://threejs.org/examples/#webgl_postprocessing
// https://threejs.org/examples/#webgl_postprocessing_glitch
// https://threejs.org/examples/#webgl_postprocessing_pixel
// https://threejs.org/examples/#webgl_postprocessing_sobel
// https://threejs.org/examples/#webgl_postprocessing_unreal_bloom
// https://threejs.org/examples/#webgl_buffergeometry
// https://threejs.org/examples/#webgl_buffergeometry_drawrange
// https://threejs.org/examples/#webgl_buffergeometry_glbufferattribute
// https://threejs.org/examples/#webgl_buffergeometry_lines
// https://threejs.org/examples/#webgl_custom_attributes_lines
// https://threejs.org/examples/#webgl_custom_attributes_points3
// https://threejs.org/examples/#webgl_gpgpu_protoplanet
// https://threejs.org/examples/#webgl_lightningstrike
// https://threejs.org/examples/#webgl2_materials_texture2darray
// https://threejs.org/examples/#webgl2_rendertarget_texture2darray
// https://threejs.org/examples/#games_fps
// https://threejs.org/examples/#misc_controls_fly
// https://threejs.org/examples/#css3d_periodictable
// https://threejs.org/examples/#css3d_sprites
// https://threejs.org/examples/#css3d_youtube
// https://experiments.withgoogle.com/chrome/globe

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
