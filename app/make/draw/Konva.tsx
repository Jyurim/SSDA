"use client";

import { useState, useRef, FunctionComponent, ReactElement, useReducer, useEffect } from "react";
import { Stage, Layer, Line, Group, Text } from "react-konva";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Modal } from "flowbite-react";

interface ILine {
  tool: string;
  points: number[];
}

interface ISize {
  stageWidth: number;
  stageHeight: number;
}

const words = [
  ["가", "귓", "깩", "낐", "냒", "댕", "댻"],
  ["땾", "떤", "랯", "렍", "멐", "멶", "벹"],
  ["볟", "뽈", "셮", "솱", "쇎", "쏗", "욃"],
  ["죬", "쭕", "퀧", "튐", "퓹", "흢", "챫"],
];

const Konva: FunctionComponent = () => {
  const { data: session } = useSession();
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([] as ILine[]);
  const [history, setHistory] = useState([] as ILine[]);
  const [size, setSize] = useState({
    stageWidth: window.innerWidth - 80,
    stageHeight: ((window.innerWidth - 80) / 7) * 4,
  } as ISize);
  const [modal, setModal] = useState(false);
  const isDrawing = useRef(false);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setSize({
        stageWidth: window.innerWidth - 80,
        stageHeight: ((window.innerWidth - 80) / 7) * 4,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const borderColor = "black";

  const handleMouseDown = e => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    setHistory([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = e => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastLine = lines[lines.length - 1];

    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
    setHistory([...lines, lastLine]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleUndo = () => {
    if (lines.length < 1) {
      return;
    }
    const newLines = lines.slice(0, lines.length - 1);
    setLines(newLines);
    setHistory([...history, lines[lines.length - 1]]);
  };

  const handleRedo = () => {
    if (history.length < 1) {
      return;
    }
    const newHistory = history.slice(0, history.length - 1);
    setHistory(newHistory);
    setLines([...lines, history[history.length - 1]]);
  };

  const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
    return (
      <Line
        points={[x1, y1, x2, y2]}
        stroke="black"
        strokeWidth={1}
        tension={0.5}
        lineCap="round"
        lineJoin="round"
      />
    );
  };

  const CreateCell = () => {
    const result = [];
    const stage = stageRef.current?.getStage();
    const gridSize = stage.width() / 7;

    for (let i = 0; i < 7; i++) {
      const x = i * gridSize;
      result.push(drawLine(x, 0, x, stage.height()));
    }

    for (let j = 0; j < 4; j++) {
      const y = j * gridSize;
      result.push(drawLine(0, y, stage.width(), y));
    }
    return result;
  };

  const DrawText = () => {
    const stage = stageRef.current?.getStage();
    const gridSize = stage.width() / 7;
    const result = [];
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 4; j++) {
        result.push(
          <Text
            x={i * gridSize + 3}
            y={j * gridSize + 3}
            text={words[j][i]}
            align="center"
            verticalAlign="middle"
            fontSize={gridSize / 6}
          />,
        );
      }
    }
    return result;
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Stage
        width={size.stageWidth}
        height={size.stageHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        className="p-10"
        ref={stageRef}
      >
        <Layer>
          <DrawText />
        </Layer>
        <Layer ref={layerRef}>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
              strokeWidth={3}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={line.tool === "eraser" ? "destination-out" : "source-over"}
            />
          ))}
          <Line
            points={[0, 0, size.stageWidth, 0]}
            stroke={borderColor}
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
          />
          <Line
            points={[0, 0, 0, size.stageHeight]}
            stroke={borderColor}
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
          />
          <Line
            points={[size.stageWidth, 0, size.stageWidth, size.stageHeight]}
            stroke={borderColor}
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
          />
          <Line
            points={[0, size.stageHeight, size.stageWidth, size.stageHeight]}
            stroke={borderColor}
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
          />
          <CreateCell />
        </Layer>
      </Stage>
      <div className="flex gap-20">
        <Button.Group>
          <Button color={tool === "pen" ? "success" : "warning"} onClick={() => setTool("pen")}>
            펜
          </Button>
          <Button
            color={tool === "eraser" ? "success" : "warning"}
            onClick={() => setTool("eraser")}
          >
            지우개
          </Button>
        </Button.Group>

        <Button.Group>
          <Button color="warning" onClick={handleUndo}>
            이전
          </Button>
          <Button color="warning" onClick={handleRedo}>
            다음
          </Button>
        </Button.Group>
        <Button color="purple" onClick={() => console.log(layerRef.current?.toDataURL())}>
          완료
        </Button>
        <Button color="failure" onClick={() => setModal(true)}>
          초기화
        </Button>
      </div>
      <>
        <Modal show={modal} onClose={onClose} popup size="md">
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                초기화 하시겠습니까?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  onClick={() => {
                    setLines([]);
                    onClose();
                  }}
                >
                  네
                </Button>
                <Button color="gray" onClick={onClose}>
                  아니오
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default Konva;
