import React, { useState } from "react";
import { Fabric, Button, Icons } from "components";
import "./styles.scss";
const { Canvas, Rect, Circle, Image } = Fabric;

const FabricExample = props => {
  return (
    <div>
      <div>
        <Button size="icon">
          <Icons.Download size={24} />
        </Button>
        <Button size="icon">
          <Icons.Download size={24} />
        </Button>
        <Button size="icon">
          <Icons.Download size={24} />
        </Button>
        <Button size="icon">
          <Icons.Download size={24} />
        </Button>
      </div>
      <Canvas className="drawing__board">
        <Rect width={100} height={100} fill="blue" />
        <Circle radius={20} top={200} />
        <Image
          url="https://images.unsplash.com/photo-1497752531616-c3afd9760a11"
          scale={0.1}
          top={100}
        />
      </Canvas>
    </div>
  );
};
export default FabricExample;
