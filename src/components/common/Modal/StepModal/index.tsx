import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";

import { Text, ImageSlider } from "@/components";
import { useModal } from "@/providers";
import { useStoryStore, StoryResponeProps } from "@/hooks";
import { useGlobalStore } from "@/store/useGlobalStore";

import * as S from "./styled";

export interface StepModalProps {
  id: string;
}

export const StepModal: React.FC<StepModalProps> = ({ id }) => {
  const { isLogedIn } = useGlobalStore();
  const { close } = useModal();
  const { getStory, removeStory } = useStoryStore();

  const [loading, setLoading] = useState<boolean>(true);
  const [story, setStory] = useState<StoryResponeProps>({
    id: "",
    title: "",
    content: "",
    filesUrl: [],
  });

  const onRemove = async () => {
    await removeStory(id);
    close();
  };

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
                <S.StepModalContentHeaderTitle>
                  <Text size={3} weight={500}>
                    {story.title}
                  </Text>
                  {isLogedIn && (
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{
                        width: "1.4rem",
                        height: "1.4rem",
                        opacity: 0.4,
                        cursor: "pointer",
                      }}
                      onClick={onRemove}
                    />
                  )}
                </S.StepModalContentHeaderTitle>
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
