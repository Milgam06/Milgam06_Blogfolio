import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Text, ImageSlider } from "@/components";
import { useModal } from "@/providers";

import * as S from "./styled";

export interface StepModalProps {
  title: string;
  content: string;
}

export const StepModal: React.FC<StepModalProps> = ({ title, content }) => {
  const { close } = useModal();
  return (
    <>
      <S.StepModalContainer>
        <S.StepModalContentContainer>
          <S.StepModalContentHeader>
            <Text size={3} weight={600}>
              {title}
            </Text>
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                width: "1.4rem",
                height: "1.4rem",
                opacity: 0.4,
                cursor: "pointer",
              }}
              onClick={close}
            />
          </S.StepModalContentHeader>
          <ImageSlider />
          <S.StepModalContentTaskContainer>
            <Text size={1.6} weight={500}>
              {content}
            </Text>
          </S.StepModalContentTaskContainer>
        </S.StepModalContentContainer>
      </S.StepModalContainer>
    </>
  );
};
