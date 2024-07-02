import { Text, TextArea, Input } from "@/components";

import * as S from "./styled";

export const AddModal: React.FC = () => {
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
        </S.AddModalContentContainer>
      </S.AddModalContainer>
    </>
  );
};
