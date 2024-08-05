import DropZone from "react-dropzone";
import React, { useEffect, useState } from "react";

import { Text, TextArea, Input } from "@/components";
import { useStoryStore, useImageStore } from "@/hooks";

import * as S from "./styled";
import { useModal } from "@/providers";

export interface DropedFilesProps {
  url: string;
  fileName: string;
  fileSize: number;
}

export const AddModal: React.FC = () => {
  const { close } = useModal();
  const { addStory } = useStoryStore();
  const { addImages } = useImageStore();

  // useState part
  const [titleValue, setTitleValue] = useState<string>("");
  const [contentValue, setContentValue] = useState<string>("");
  const [dropedFiles, setDropedFiles] = useState<string[]>([]);

  // Handler part
  const onTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const onContentChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContentValue(e.target.value);
  };

  const onDropHandler = async (acceptedFiles: File[]) => {
    const uploadedFile = await Promise.all(
      // Promise.all 을 사용하여, acceptedFiles 배열의 모든 파일을 addImages에 props 전달하고 비동기 처리를 통해 반환 값을 return
      acceptedFiles.map(async (file) => {
        const fileUrl = await addImages({ uploadedFile: file });
        return fileUrl;
      })
    );
    setDropedFiles((prev) => [...prev, ...uploadedFile]);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (titleValue === "" || contentValue === "") {
        alert("모든 항목을 입력해주세요.");
        return;
      } else if (titleValue.length > 14) {
        alert("제목은 14자 이하로 작성해주세요.");
        return;
      } else if (dropedFiles.length === 0) {
        alert("이미지를 업로드 해주세요.");
        return;
      } else {
        await addStory({
          title: titleValue,
          content: contentValue,
          filesUrl: dropedFiles,
        });
        close();
        console.log("submit");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    console.log(dropedFiles, "dropedFiles");
  }, [dropedFiles]);
  return (
    <>
      <S.AddModalContainer>
        <S.AddModalContentContainer onSubmit={onSubmitHandler}>
          <Text size={1} weight={600}>
            Step의 이름을 적어주세요.
          </Text>
          <Input value={titleValue} onChange={onTitleChangeHandler} />
          <Text size={1} weight={600}>
            Step의 세부 내용을 적어주세요.
          </Text>
          <TextArea value={contentValue} onChange={onContentChangeHandler} />
          <Text size={1} weight={600}>
            Step과 관련된 이미지를 업로드해주세요.
          </Text>
          <DropZone
            onDrop={onDropHandler}
            accept={{ "image/*": [".jpg", ".jpeg", ".png"] }}
            minSize={1024}
            maxSize={3272000}
          >
            {({ getRootProps, getInputProps }) => (
              <S.AddModalFileUploadContainer
                {...getRootProps({ className: "dropzone" })}
              >
                <input {...getInputProps()} />
                <p>소중한 경험들의 이미지를 업로드 해주세요!</p>
              </S.AddModalFileUploadContainer>
            )}
          </DropZone>
          <S.AddModalSubmitButton onClick={() => onSubmitHandler} type="submit">
            <Text size={1.2} weight={600} color="#fff">
              제출하기
            </Text>
          </S.AddModalSubmitButton>
        </S.AddModalContentContainer>
      </S.AddModalContainer>
    </>
  );
};
