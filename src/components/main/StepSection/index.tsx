import { useEffect, useState } from "react";

import { SectionLayout, Button, StepModal, AddModal } from "@/components";
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
      <SectionLayout
        title="Experience"
        subtitle="저의 소중한 경험들이에요."
        sectionBackgroundColor="linear-gradient(to bottom, #b7e4c7,#1b4332)"
      >
        <S.StepSectionContentContainer {...fadeInScroll({ delay: 0.08 })}>
          {stories.map((story) => (
            <Button
              isLarge={false}
              onClickHandler={() => onOpenStepModal(story.id)}
            >
              {story.title}
            </Button>
          ))}
          {isLogedIn && (
            <Button isLarge={false} onClickHandler={onOpenAddModal}>
              +
            </Button>
          )}
        </S.StepSectionContentContainer>
      </SectionLayout>
    </>
  );
};
