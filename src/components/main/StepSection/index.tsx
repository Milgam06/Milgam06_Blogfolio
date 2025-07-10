import { useEffect, useState } from 'react';

import { SectionLayout, StepButton, StepModal, AddModal, Text, BaseLayout } from '@/components';
import { useFadeInScroll } from '@/hooks';
import { useModal } from '@/providers';
import { useStoryStore, StoryResponseProps } from '@/hooks';
import { useGlobalStore } from '@/store/useGlobalStore';

import * as S from './styled';
import { Flex } from '@mantine/core';

export const StepSection: React.FC = () => {
  const { getAllStories } = useStoryStore();
  const { isLoggedIn } = useGlobalStore();
  const { open } = useModal();
  const { fadeInScroll } = useFadeInScroll();
  const [stories, setStories] = useState<StoryResponseProps[]>([]);

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
  };
  const onOpenAddModal = () => {
    open({ children: <AddModal /> });
  };
  return (
    <>
      <BaseLayout justify="center" align="center" isFullWidth gap={100}>
        <Text size={8} weight={900} color="linear-gradient(to right, #FF8C42 0%, #FFE5B4 50%,#FF8C42 100%)">
          My Projects
        </Text>
        <Flex justify="flex-start" align="center" gap="xl">
          {stories.map((story) => (
            <StepButton
              isLarge={true}
              hasImage={true}
              imgSrc={story.filesUrl[0]}
              onClickHandler={() => onOpenStepModal(story.id)}>
              <Text size={1.4} weight={100}>
                {story.title}
              </Text>
            </StepButton>
          ))}
          {isLoggedIn && (
            <StepButton isLarge={false} onClickHandler={onOpenAddModal}>
              +
            </StepButton>
          )}
        </Flex>
        {/* <SectionLayout title="Experience" subtitle="저의 소중한 경험들이에요.">
        <S.StepSectionContentContainer {...fadeInScroll({ delay: 0.08 })}>
        </S.StepSectionContentContainer>
        </SectionLayout> */}
      </BaseLayout>
    </>
  );
};
