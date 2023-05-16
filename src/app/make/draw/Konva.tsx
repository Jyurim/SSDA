"use client";

import { useState, useRef, FunctionComponent } from "react";
import { Stage, Layer, Line, Rect, Text } from "react-konva";
import Konva from "konva";
import axios from "axios";
interface ILine {
  tool: string;
  points: number[];
}

const KonvaComponent: FunctionComponent = () => {
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([] as ILine[]);
  const [history, setHistory] = useState([] as ILine[]);
  const isDrawing = useRef(false);
  const stageRef = useRef<Konva.Stage>(null);

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

  const handleDownload = async () => {
    const dataURL = stageRef?.current?.toDataURL();
    // axios header에 token 추가
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post("/api/make/draw", { imageBase64: dataURL, fontName: "NanumSquareRound" });
  };

  const box = (width: number, height: number) => {
    const gridSize = width / 7;
    const result = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        result.push(
          <Rect
            key={i * 7 + j}
            x={i * gridSize}
            y={j * gridSize}
            width={gridSize}
            height={gridSize}
            stroke={"black"}
            strokeWidth={3}
          />,
        );
      }
    }
    return result;
  };

  return (
    <div className="p-15 flex w-screen flex-col items-center justify-center">
      <Stage
        width={stageRef?.current?.container().clientWidth || window.innerWidth - 200}
        height={stageRef?.current?.container().clientHeight || window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        ref={stageRef}
        className="flex items-center justify-center"
      >
        <Layer>
          {box(window.innerWidth, window.innerHeight)}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={line.tool === "eraser" ? "destination-out" : "source-over"}
            />
          ))}
        </Layer>
      </Stage>
      <select value={tool} onChange={e => setTool(e.target.value)}>
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
      <button onClick={() => setLines([])}>Reset</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <button onClick={handleDownload}>Save</button>
    </div>
  );
};

export default KonvaComponent;
