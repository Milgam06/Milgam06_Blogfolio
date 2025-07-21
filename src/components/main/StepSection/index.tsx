import { useCallback, useEffect, useState } from 'react';
import { Flex } from '@mantine/core';

import { StepButton, StepModal, AddModal, Text, BaseLayout } from '@/components';
import { useModal } from '@/providers';
import { useStoryStore, StoryResponseProps } from '@/hooks';
import { useGlobalStore } from '@/store/useGlobalStore';

export const StepSection: React.FC = () => {
  const { getAllStories } = useStoryStore();
  const { isLoggedIn } = useGlobalStore();
  const { open } = useModal();

  const [stories, setStories] = useState<StoryResponseProps[]>([]);

  const fetchAllStories = useCallback(async () => {
    const storedStories = await getAllStories();
    if (storedStories) {
      setStories(storedStories);
    }
  }, [getAllStories]);

  useEffect(() => {
    fetchAllStories();
  }, []);

  const onOpenStepModal = (id: string) => {
    open({ children: <StepModal id={id} /> });
  };
  const onOpenAddModal = () => {
    open({ children: <AddModal /> });
  };
  return (
    <>
      <BaseLayout justify="center" align="center" gap={100}>
        <Text size={8} weight={900} color="linear-gradient(to right, #FF8C42 0%, #FFE5B4 50%,#FF8C42 100%)">
          My Projects
        </Text>
        <Flex
          w="100%"
          justify="flex-start"
          align="center"
          gap="xl"
          p="xl"
          styles={{
            root: {
              overflow: 'scroll',
              scrollbarWidth: 'none',
            },
          }}>
          {stories.map(({ id, filesUrl, title }) => {
            const thumbnailImage = filesUrl[0];
            return (
              <StepButton
                key={id}
                isLarge={true}
                hasImage={true}
                imgSrc={thumbnailImage}
                onClickHandler={() => onOpenStepModal(id)}>
                <Text size={1.4} weight={100}>
                  {title}
                </Text>
              </StepButton>
            );
          })}
          {isLoggedIn && (
            <StepButton isLarge={false} onClickHandler={onOpenAddModal}>
              +
            </StepButton>
          )}
        </Flex>
      </BaseLayout>
    </>
  );
};
