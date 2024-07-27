import DropZone from "react-dropzone";
import React, { useEffect, useState } from "react";

import { Text, TextArea, Input } from "@/components";
import { useStoryStore } from "@/hooks";

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

  // useState part
  const [titleValue, setTitleValue] = useState<string>("");
  const [contentValue, setContentValue] = useState<string>("");
  const [dropedFiles, setDropedFiles] = useState<DropedFilesProps[]>([]);

  // Handler part
  const onTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const onContentChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContentValue(e.target.value);
  };

  const onDropHandler = (acceptedFiles: File[]) => {
    // const reader = new FileReader();
    const file = acceptedFiles;
    if (file) {
      // reader.readAsDataURL(file[0]);
      const fileURL = URL.createObjectURL(file[0]);
      console.log(file, "files");
      setDropedFiles((prev) => [
        ...prev,
        { url: fileURL, fileName: file[0].name, fileSize: file[0].size },
      ]);
    }
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (titleValue === "" || contentValue === "") {
        alert("모든 항목을 입력해주세요.");
        return;
      } else {
        await addStory({ title: titleValue, content: contentValue });
        console.log("submit");
        close();
      }
    } catch (e) {
      console.error("error", e);
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
          <S.AddModalSubmitButton onClick={onSubmitHandler} type="submit">
            <Text size={1.2} weight={600} color="#fff">
              제출하기
            </Text>
          </S.AddModalSubmitButton>
        </S.AddModalContentContainer>
      </S.AddModalContainer>
    </>
  );
};
