import DropZone from "react-dropzone";
import React, { useEffect, useState } from "react";

import { Text, TextArea, Input } from "@/components";

import * as S from "./styled";

export interface DropedFilesProps {
  url: string;
  fileName: string;
  fileSize: number;
}

export const AddModal: React.FC = () => {
  const [dropedFiles, setDropedFiles] = useState<DropedFilesProps[]>([]);
  const onDropHandler = (acceptedFiles: File[]) => {
    // const reader = new FileReader();
    const file = acceptedFiles;
    if (file) {
      // reader.readAsDataURL(file[0]);
      const fileURL = URL.createObjectURL(file[0]);
      console.log(file);
      setDropedFiles((prev) => [
        ...prev,
        { url: fileURL, fileName: file[0].name, fileSize: file[0].size },
      ]);
    }
  };

  useEffect(() => {
    console.log(dropedFiles);
  }, [dropedFiles]);
  return (
    <>
      <S.AddModalContainer>
        <S.AddModalContentContainer>
          <Text size={1} weight={600}>
            Step의 이름을 적어주세요.
          </Text>
          <Input />
          <Text size={1} weight={600}>
            Step의 세부 내용을 적어주세요.
          </Text>
          <TextArea />
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
        </S.AddModalContentContainer>
      </S.AddModalContainer>
    </>
  );
};
