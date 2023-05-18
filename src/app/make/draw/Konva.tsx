"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, FunctionComponent, useEffect } from "react";
import { Stage, Layer, Text, Line } from "react-konva";

interface ILine {
  tool: string;
  points: number[];
}

const Konva: FunctionComponent = () => {
  const router = useRouter();
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([] as ILine[]);
  const [history, setHistory] = useState([] as ILine[]);
  const [accessToken, setAccessToken] = useState<string>("");
  const isDrawing = useRef(false);

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken")!);
    if (accessToken.length < 3) {
      console.log(accessToken);
      router.push("/user/login");
    }
  }, []);

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

  return (
    <div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text text="Just start drawing" x={5} y={30} />
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
    </div>
  );
};

export default Konva;
