/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, FunctionComponent, useEffect } from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { ErrorWithMsg, SuccessWithMsgRouter } from "@libs/myAlert";
import Konva from "konva";

const API = process.env.SSDA_API;

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

const KonvaComponent: FunctionComponent = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([] as ILine[]);
  const [history, setHistory] = useState([] as ILine[]);
  const [size, setSize] = useState({
    stageWidth: window.innerWidth - 80,
    stageHeight: ((window.innerWidth - 80) / 7) * 4,
  } as ISize);
  const [modalReset, setModalReset] = useState(false);
  const [modalCompl, setModalCompl] = useState(false);
  const [fontName, setFontName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isDrawing = useRef(false);
  const stageRef = useRef<Konva.Stage>(null);
  const layerRef = useRef<Konva.Layer>(null);
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

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    setHistory([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
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
    if (stage) {
      const gridSize = stage?.width() / 7;

      for (let i = 0; i < 7; i++) {
        const x = i * gridSize;
        result.push(drawLine(x, 0, x, stage.height()));
      }

      for (let j = 0; j < 4; j++) {
        const y = j * gridSize;
        result.push(drawLine(0, y, stage.width(), y));
      }
      return result;
    }
  };

  const DrawText = () => {
    const stage = stageRef.current?.getStage();
    if (stage) {
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
    }
  };

  const onCloseReset = () => {
    setModalReset(false);
  };
  const onCloseCompl = () => {
    setModalCompl(false);
  };

  const handleCreate = async () => {
    setIsLoading(true);
    const canvasUrl = layerRef.current?.toDataURL().split(";");
    if (!canvasUrl) {
      setIsLoading(false);
      ErrorWithMsg("이미지 저장 실패", "이미지 저장에 실패하였습니다");
      return;
    }
    const contentType = canvasUrl[0].split(":")[1];
    const imageBase64 = canvasUrl[1].split(",")[1];
    await fetch(`${API}/api/make/draw`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({
        imageBase64,
        contentType,
        fontName,
      }),
    })
      .then(res => {
        if (res.ok == false) {
          throw new Error(res.statusText);
        }
        SuccessWithMsgRouter(
          "이미지 저장 완료!!",
          "이미지 저장이 완료되었습니다\n생성이 완료되면 메일로 알려드릴게요!",
          router,
          "/board",
        );
        setIsLoading(false);
      })
      .catch(err => {
        ErrorWithMsg("이미지 저장 실패", "이미지 저장에 실패했습니다" + err);
      });
  };

  const ModalCreat = () => {
    const rootRef = useRef(null);
    return (
      <div ref={rootRef}>
        <Modal
          root={rootRef.current ?? undefined}
          show={modalCompl}
          onClose={onCloseCompl}
          popup
          size="md"
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                폰트 이름을 입력해주세요.
              </h3>
              <div aria-hidden={!modalCompl}>
                <form>
                  <div className="mb-2 block">
                    <Label htmlFor="폰트 이름" value="폰트이름" />
                  </div>
                  <TextInput
                    placeholder="나눔고딕"
                    required
                    onChange={e => setFontName(e.target.value)}
                    value={fontName}
                    autoFocus
                  />
                </form>
              </div>
              <div className="w-full">
                <Button onClick={handleCreate} disabled={fontName === ""}>
                  {isLoading ? (
                    <svg
                      className="h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  ) : (
                    <>폰트 만들기</>
                  )}
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
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
          {DrawText()?.map((item, index) => (
            <div key={index}>{item}</div>
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
          {CreateCell()?.map((cell, i) => (
            <div key={i}>{cell}</div>
          ))}
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
        <Button color="purple" onClick={() => setModalCompl(true)}>
          완료
        </Button>
        <Button color="failure" onClick={() => setModalReset(true)}>
          초기화
        </Button>
      </div>
      <>
        <Modal show={modalReset} onClose={onCloseReset} popup size="md">
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
                    onCloseReset();
                  }}
                >
                  네
                </Button>
                <Button color="gray" onClick={onCloseReset}>
                  아니오
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
      {ModalCreat()}
    </div>
  );
};

export default KonvaComponent;
