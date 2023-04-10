import React, { useRef } from "react";
import Testimg from "../../public/Test.png";
import CanvasDraw from "react-canvas-draw";
import { Button } from "flowbite-react";

const Canvas = () => {
  const canvasRef = useRef<CanvasDraw>(null);
  return (
    <section className="flex items-center justify-center">
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={550}
        lazyRadius={0}
        brushRadius={2}
        brushColor="black"
        hideGrid={true}
        imgSrc={Testimg.src}
      />
      <div>
        {
          <>
            <Button onClick={() => canvasRef?.current?.undo()}>Undo</Button>
            <Button onClick={() => canvasRef?.current?.clear()}>Clear</Button>
            <Button onClick={() => canvasRef?.current?.getDataURL("png", false, "")}>
              getDataURL
            </Button>
          </>
        }
      </div>
    </section>
  );
};

export default Canvas;
