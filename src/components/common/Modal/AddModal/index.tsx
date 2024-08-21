import DropZone from "react-dropzone";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

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
  const [dropedFiles, setDropedFiles] = useState<File[]>([]);
  const [dropedFilesImg, setDropedFilesImg] = useState<string[]>([]);
  const [isHighlight, setIsHighlight] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    acceptedFiles.map(async (file) => {
      setDropedFiles((prev) => [...prev, file]);
      const filesImg = URL.createObjectURL(file);
      setDropedFilesImg((prev) => [...prev, filesImg]);
    });

    console.log(dropedFiles, "dropedFiles");
  };

  const removeDropedFile = (index: number, e: React.MouseEvent) => {
    // 함수형을 사용하여, stopPropagation을 사용할 때 이미지가 실시간으로 사라지는게 보이도록 수정
    setDropedFiles((prev) => prev.filter((i) => i !== dropedFiles[index]));
    setDropedFilesImg((prev) =>
      prev.filter((i) => i !== dropedFilesImg[index])
    );
    e.stopPropagation();
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("submit");
    try {
      if (titleValue === "" || contentValue === "") {
        alert("모든 항목을 입력해주세요.");
        return;
      } else if (titleValue.length > 14) {
        alert("제목은 14자 이하로 작성해주세요.");
        return;
      } else if (dropedFiles.length < 3 || dropedFiles.length > 6) {
        alert("이미지는 3개 이상, 6개 이하로 업로드해주세요.");
        return;
      } else {
        const fileUrls = await Promise.all(
          dropedFiles.map(async (file) => {
            const fileUrl = await addImages({ uploadedFile: file });
            return fileUrl;
          })
        );
        await addStory({
          title: titleValue,
          content: contentValue,
          filesUrl: fileUrls,
          highlight: isHighlight,
        });
        setIsLoading(false);
        close();
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    console.log("dropedFiles", dropedFiles);
  }, [dropedFiles]);

  return (
    <>
      <S.AddModalContainer>
        <S.AddModalHeaderContainer>
          <Text size={1.6} weight={600}>
            당신만의 경험을 알려주세요!
          </Text>
          {isHighlight ? (
            <FontAwesomeIcon
              icon={faStar}
              style={{ width: "1.6rem", height: "1.6rem" }}
              color="#fbd145"
              onClick={() => setIsHighlight(!isHighlight)}
            />
          ) : (
            <FontAwesomeIcon
              icon={emptyStar}
              style={{ width: "1.6rem", height: "1.6rem" }}
              onClick={() => setIsHighlight(!isHighlight)}
            />
          )}
        </S.AddModalHeaderContainer>
        <S.AddModalContentContainer onSubmit={onSubmitHandler}>
          <Text size={1} weight={600} color="#626262">
            Step의 이름을 적어주세요.
          </Text>
          <Input value={titleValue} onChange={onTitleChangeHandler} />
          <Text size={1} weight={600} color="#626262">
            Step의 세부 내용을 적어주세요.
          </Text>
          <TextArea value={contentValue} onChange={onContentChangeHandler} />
          <Text size={1} weight={600} color="#626262">
            Step과 관련된 이미지를 업로드해주세요.
          </Text>
          <DropZone
            onDrop={onDropHandler}
            accept={{ "image/*": [".jpg", ".jpeg", ".png"] }}
            noClick={false}
            minSize={1024}
            maxSize={500000000}
          >
            {({ getRootProps, getInputProps }) => (
              <S.AddModalFileUploadContainer
                {...getRootProps({ className: "dropzone" })}
              >
                <input {...getInputProps()} />
                {dropedFiles.length !== 0 ? (
                  <S.AddModalUploadedImageWrapper>
                    {dropedFilesImg.map((fileImg, i) => (
                      <S.AddModalUploadedImage
                        key={i}
                        src={fileImg}
                        alt={fileImg}
                        onClick={(e) => removeDropedFile(i, e)}
                      />
                    ))}
                  </S.AddModalUploadedImageWrapper>
                ) : (
                  <p>소중한 경험들의 이미지를 업로드 해주세요!</p>
                )}
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
