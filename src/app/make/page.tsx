"use client";
import React, { useRef } from "react";
import Testimg from "../../../public/Test.png";
import CanvasDraw from "react-canvas-draw";
import { Button } from "flowbite-react";

const Canvas = () => {
  const canvasRef = useRef<CanvasDraw>(null);
  console.log(canvasRef);
  return (
    <section className="flex h-screen items-center justify-center">
      <CanvasDraw
        style={{ minHeight: 911, minWidth: 1608 }}
        canvasHeight={911}
        canvasWidth={1608}
        ref={canvasRef}
        lazyRadius={0}
        brushRadius={2}
        brushColor="black"
        hideGrid={true}
        imgSrc={Testimg.src}
        enablePanAndZoom={true}
      />
      <div className="">
        <Button onClick={() => canvasRef?.current?.undo()}>Undo</Button>
        <Button onClick={() => canvasRef?.current?.clear()}>Clear</Button>
        <Button onClick={() => console.log(canvasRef?.current?.getDataURL("png", true, ""))}>
          getDataURL
        </Button>
      </div>
      <div></div>
    </section>
  );
};

export default Canvas;
