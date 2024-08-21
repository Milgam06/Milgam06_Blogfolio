import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Text, ImageSlider } from "@/components";
import { useModal } from "@/providers";
import { useStoryStore, StoryResponeProps } from "@/hooks";

import * as S from "./styled";

export interface StepModalProps {
  id: string;
}

export const StepModal: React.FC<StepModalProps> = ({ id }) => {
  const { close } = useModal();
  const { getStory } = useStoryStore();

  const [loading, setLoading] = useState<boolean>(true);
  const [story, setStory] = useState<StoryResponeProps>({
    id: "",
    title: "",
    content: "",
    filesUrl: [],
  });

  useEffect(() => {
    const fetchStory = async () => {
      const storedStory = await getStory(id);
      if (storedStory) {
        setStory(storedStory);
      }
      setLoading(false);
    };
    fetchStory();
  }, [id]);

  return (
    <>
      <S.StepModalContainer>
        <S.StepModalContentContainer>
          {loading ? (
            <>
              <S.StepModalLoadingContainer>
                <Text size={3} weight={500}>
                  Loading...
                </Text>
              </S.StepModalLoadingContainer>
            </>
          ) : (
            <>
              <S.StepModalContentHeader>
                <Text size={3} weight={600}>
                  {story.title}
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
              <ImageSlider images={story.filesUrl} />
              <S.StepModalContentTaskContainer>
                <Text size={1.6} weight={500}>
                  {story.content}
                </Text>
              </S.StepModalContentTaskContainer>
            </>
          )}
        </S.StepModalContentContainer>
      </S.StepModalContainer>
    </>
  );
};
