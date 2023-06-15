"use client";

import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import exampleImage from "@public/draw_file_ex.png";
import { useSession } from "next-auth/react";
import { ErrorWithMsg, SuccessWithMsgRouter, noAuth } from "@libs/myAlert";

const API = process.env.SSDA_API ?? "https://api.ssda.dawoony.com";

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!session) {
      noAuth(router);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const convertImagetoBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) resolve(reader.result);
        else reject("Failed to convert image to base64");
      };
    });
  };

  const handleCreate = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    let imageBase64;
    let contentType;

    await convertImagetoBase64(e.currentTarget.drawImgage.files[0])
      .then(res => {
        imageBase64 = res?.toString().split(",")[1];
        contentType = res?.toString().split(",")[0].split(";")[0].split(":")[1];
      })
      .catch(err => {
        ErrorWithMsg("이미지 저장 실패", "이미지 저장에 실패했습니다" + err);
        setIsLoading(false);
      });
    const fontName = e.target["fontName"].value;

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
          "이미지 저장이 완료되었습니다.\n생성이 완료되면 메일로 알려드릴게요!",
          router,
          "/board",
        );
        setIsLoading(false);
      })
      .catch(err => {
        ErrorWithMsg("이미지 저장 실패", "이미지 저장에 실패했습니다." + err);
        setIsLoading(false);
      });
  };

  return (
    <section className="mb-20 flex min-h-3/4 items-center justify-center p-10">
      <div className="flex items-center justify-start gap-12">
        <div className="w-4/6 rounded-lg border border-black p-2">
          <Image src={exampleImage} alt="손글씨 업로드 예시" />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="pb-8">
            <h1 className="text-2xl font-bold">손글씨 파일 업로드</h1>
            <p>손글씨 파일을 업로드하고, 폰트 이름을 입력해 주세요.</p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleCreate}
            encType="multipart/form-data"
          >
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="drawImgage" value="손 글씨 파일" />
              </div>
              <FileInput
                helperText="이미지 파일은 예시와 같은 형식이어야 합니다."
                name="drawImgage"
                id="drawImgage"
                sizing={"lg"}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="fontName" value="폰트 이름을 입력해 주세요." />
              </div>
              <TextInput
                name="fontName"
                id="fontName"
                type="text"
                placeholder="나눔고딕"
                required
              />
            </div>
            <Button type="submit" color={"purple"}>
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
            </Button>{" "}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
