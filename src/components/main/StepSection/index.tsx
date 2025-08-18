import { useCallback, useMemo, useState } from 'react';
import { useDidMount, useDidUpdate } from 'rooks';
import { AspectRatio, BackgroundImage, Button, Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import { StepModal, BaseLayout, Text, AddModal } from '@/components';
import { useModal } from '@/providers';
import { useStoryStore, StoryResponseProps } from '@/hooks';
import { useGlobalStore } from '@/store/useGlobalStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const StepSection: React.FC = () => {
  const { getAllStories } = useStoryStore();
  const { isLoggedIn } = useGlobalStore();
  const { open } = useModal();

  const [stories, setStories] = useState<StoryResponseProps[]>([]);
  const [displayStep, setDisplayStep] = useState<StoryResponseProps | null>(null);

  const { displayStepImg, displayStepId } = useMemo(() => {
    const hasNotDisplayStep = !displayStep;
    if (hasNotDisplayStep) {
      const displayStepImg = '';
      const displayStepId = '';
      return { displayStepImg, displayStepId };
    }

    const displayStepImg = displayStep.filesUrl[0];
    const displayStepId = displayStep.id;
    return { displayStepImg, displayStepId };
  }, [displayStep]);

  const onClickDisplayStep = useCallback(
    (id: string) => () => {
      open({ children: <StepModal id={id} /> });
    },
    [open]
  );

  const onClickAddStepSlide = useCallback(() => {
    open({ children: <AddModal /> });
  }, [open]);

  const onHoverOnStep = useCallback(
    (step: StoryResponseProps) => () => {
      setDisplayStep(step);
    },
    []
  );

  const fetchStepData = useCallback(async () => {
    const storedSteps = await getAllStories();
    const hasNotStoredSteps = !storedSteps || storedSteps.length === 0;
    if (hasNotStoredSteps) {
      return;
    }
    setStories(storedSteps);
    return;
  }, [getAllStories]);

  useDidMount(async () => {
    await fetchStepData();
  });

  useDidUpdate(() => {
    const hasNotStories = !stories || stories.length === 0;
    if (hasNotStories) {
      return;
    }
    setDisplayStep(stories[0]);
  }, [stories]);

  return (
    <BaseLayout isFullWidth justify="center" align="center" gap={20}>
      <AspectRatio ratio={16 / 9} w={900}>
        <BackgroundImage
          src={displayStepImg}
          w="100%"
          h="100%"
          radius={20}
          p={0}
          styles={{
            root: {
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
            },
          }}>
          <Stack w="100%" h="100%" justify="flex-end" align="flex-end" p="xs">
            {stories && (
              <Button
                size="md"
                w="auto"
                h="auto"
                variant="filled"
                px="md"
                py="xs"
                radius={30}
                color="#303030"
                onClick={onClickDisplayStep(displayStepId)}>
                <Text size={1.2} weight={900} color="#fff">
                  Learn more..
                </Text>
              </Button>
            )}
          </Stack>
        </BackgroundImage>
      </AspectRatio>
      <Carousel
        w={1200}
        slideSize="33.33333%"
        slideGap="xl"
        emblaOptions={{ loop: true, align: 'center', slidesToScroll: 3 }}>
        {stories.map((step) => {
          return (
            <Carousel.Slide key={step.id} h={200} onMouseEnter={onHoverOnStep(step)} my="lg">
              <BackgroundImage
                key={step.id}
                w="100%"
                h="100%"
                src={step.filesUrl[0]}
                radius={15}
                styles={{
                  root: {
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  },
                }}
              />
            </Carousel.Slide>
          );
        })}
        {isLoggedIn && (
          <Carousel.Slide key="addStep" h={200} my="lg">
            <Stack
              w="100%"
              h="100%"
              justify="center"
              align="center"
              gap="md"
              bg="#d7d7d7"
              onClick={onClickAddStepSlide}
              styles={{ root: { borderRadius: 15, cursor: 'pointer' } }}>
              <FontAwesomeIcon icon={faPlus} size="4x" color="#aaaaaa" />
              <Text size={2} weight={900} color="#aaaaaa">
                Add Step
              </Text>
            </Stack>
          </Carousel.Slide>
        )}
      </Carousel>
    </BaseLayout>
  );
};
