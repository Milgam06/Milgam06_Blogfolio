import DropZone from "react-dropzone";

import { Text, TextArea, Input } from "@/components";

import * as S from "./styled";

export const AddModal: React.FC = () => {
  const onDropHandler = (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  };
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
              <section>
                <div
                  style={{ border: "1px solid red" }}
                  {...getRootProps({ className: "dropzone" })}
                >
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </DropZone>
        </S.AddModalContentContainer>
      </S.AddModalContainer>
    </>
  );
};
