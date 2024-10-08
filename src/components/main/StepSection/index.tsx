import { useEffect, useState } from "react";

import {
  SectionLayout,
  StepButton,
  StepModal,
  AddModal,
  Text,
} from "@/components";
import { useFadeInScroll } from "@/hooks";
import { useModal } from "@/providers";
import { useStoryStore, StoryResponeProps } from "@/hooks";
import { useGlobalStore } from "@/store/useGlobalStore";

import * as S from "./styled";

export const StepSection: React.FC = () => {
  const { getAllStories } = useStoryStore();
  const { isLogedIn } = useGlobalStore();
  const { open } = useModal();
  const { fadeInScroll } = useFadeInScroll();
  const [stories, setStories] = useState<StoryResponeProps[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      const storedStories = await getAllStories();
      if (storedStories) {
        setStories(storedStories);
      }
    };
    fetchStories();
  }, []);

  const onOpenStepModal = (id: string) => {
    open({ children: <StepModal id={id} /> });
    console.log("asdf");
  };
  const onOpenAddModal = () => {
    open({ children: <AddModal /> });
  };
  return (
    <>
      <SectionLayout title="Experience" subtitle="저의 소중한 경험들이에요.">
        <S.StepSectionContentContainer {...fadeInScroll({ delay: 0.08 })}>
          {stories.map((story) => (
            <StepButton
              isLarge={true}
              hasImage={true}
              imgSrc={story.filesUrl[0]}
              onClickHandler={() => onOpenStepModal(story.id)}
            >
              <Text size={1.4} weight={100}>
                {story.title}
              </Text>
            </StepButton>
          ))}
          {isLogedIn && (
            <StepButton isLarge={false} onClickHandler={onOpenAddModal}>
              +
            </StepButton>
          )}
        </S.StepSectionContentContainer>
      </SectionLayout>
    </>
  );
};
