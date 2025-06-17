import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loader from "../Loader";
import avatar from "../assets/DHL_avatar.jpg";

const GridAsciiBox = ({ position, label }) => (
  <mesh position={position}>
    <boxGeometry args={[1.5, 1.5, 1.5]} />
    <meshStandardMaterial color="#915EFF" />
  </mesh>
);

const ComputerCanvas = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Left: 3D Canvas */}
      <div style={{ width: "50%", height: "500px" }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={<Loader />}>
            <ambientLight />
            <directionalLight position={[0, 5, 5]} intensity={1} />
            <GridAsciiBox position={[-1, 1, 0]} label="DNA" />
            <GridAsciiBox position={[1, 1, 0]} label="Battery" />
            <GridAsciiBox position={[-1, -1, 0]} label="Pill" />
            <GridAsciiBox position={[1, -1, 0]} label="Flask" />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>

      {/* Right: Avatar */}
      <div style={{ width: "50%", textAlign: "center" }}>
        <img src={avatar} alt="avatar" style={{ width: "80%", borderRadius: "10px" }} />
        <p style={{ color: "#555", marginTop: "1rem" }}>Donghyeun Lee</p>
      </div>
    </div>
  );
};

export default ComputerCanvas;
