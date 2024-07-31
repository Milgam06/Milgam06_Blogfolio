import { useEffect, useState } from "react";

import { SectionLayout, Button, StepModal, AddModal, Text } from "@/components";
import { useFadeInScroll } from "@/hooks";
import { useModal } from "@/providers";
import { useStoryStore, StoryResponeProps } from "@/hooks";

import * as S from "./styled";

export const StepSection: React.FC = () => {
  const { getAllStories } = useStoryStore();
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
      <SectionLayout title="Exerience" subtitle="저의 소중한 경험들이에요.">
        <S.StepSectionContentContainer {...fadeInScroll({ delay: 0.08 })}>
          {stories.map((story) => (
            <Button
              isLarge={true}
              onClickHandler={() => onOpenStepModal(story.id)}
            >
              {story.title}
            </Button>
          ))}
          <Button isLarge={true} onClickHandler={onOpenAddModal}>
            +
          </Button>
        </S.StepSectionContentContainer>
      </SectionLayout>
    </>
  );
};
