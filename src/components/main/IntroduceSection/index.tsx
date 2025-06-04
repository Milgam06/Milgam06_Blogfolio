import { useCallback, useMemo } from 'react';
import { Badge, Flex, Stack } from '@mantine/core';

import { TiltingCard, Text, BaseLayout, Timeline, ITabsItemProps, Tabs } from '@/components';
import { BUY_ME_A_COFFEE_URL, ETechStack, INTRODUCE_SECTION_WHOAMI } from '@/constant';
import { WhoamiIntroduceImg } from '@/assets';

export const IntroduceSection: React.FC = () => {
  const { name, birth, techstack } = useMemo(() => {
    return INTRODUCE_SECTION_WHOAMI;
  }, []);

  const handleClickPlacard = useCallback(() => {
    window.open(BUY_ME_A_COFFEE_URL, '_blank');
  }, []);

  const techStackList = useMemo(() => {
    return Object.values(ETechStack);
  }, []);

  const TechStacks = useMemo(() => {
    return (
      <Stack
        maw={200}
        mah={300}
        align="center"
        justify="space-between"
        gap="xl"
        styles={{ root: { overflow: 'auto' } }}>
        {techStackList.map((techStack, key) => {
          const techStackLabel = techStack.toUpperCase();
          return (
            <Stack
              key={key}
              align="center"
              justify="center"
              p={0}
              bd="1px solid red"
              styles={{
                root: {
                  width: 'fit-content',
                },
              }}>
              <Text size={1.2} weight={900}>
                {techStackLabel}
              </Text>
              <Flex bd="1px solid red" justify="center" align="center" wrap="wrap" gap="xs">
                {techstack[techStack].map((item, index) => (
                  <Badge size="lg" key={index}>
                    {item}
                  </Badge>
                ))}
              </Flex>
            </Stack>
          );
        })}
      </Stack>
    );
  }, [techStackList, techstack]);

  const items: ITabsItemProps[] = [
    {
      tabsValue: 'whoami',
      tabsLabel: 'Who am I?',
      tabsItem: 'asdf',
    },
    {
      tabsValue: 'timeline',
      tabsLabel: 'Timeline',
      tabsItem: 'asdf',
    },
    {
      tabsValue: 'contact',
      tabsLabel: 'Contact',
      tabsItem: 'Contact me at my email',
    },
    {
      tabsValue: 'tech-stack',
      tabsLabel: 'Tech Stack',
      tabsItem: TechStacks,
    },
  ];

  return (
    <>
      <BaseLayout isFullWidth justify="space-between" align="center" direction={{ base: 'column', sm: 'row' }}>
        <Stack gap={60}>
          <Text size={8} weight={900} color="linear-gradient(to right, #FF8C42 0%, #FFE5B4 50%,#FF8C42 100%)">
            About Me
          </Text>
          <Flex direction="row" align="center" justify="center" gap={80}>
            <Stack justify="center" align="center">
              <Stack justify="center" align="center">
                <TiltingCard cardImgSrc={WhoamiIntroduceImg} onClick={handleClickPlacard} />
                <Stack w="100%" justify="center" align="flex-start" gap={4} px="sm">
                  <Text size={3.2} weight={900}>
                    {name}
                  </Text>
                  <Text size={1.6} weight={300} color="#c1c1c1">
                    {birth}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Tabs tabsItems={items} defaultValue="tech-stack" inverted />
          </Flex>
        </Stack>
      </BaseLayout>
    </>
  );
};
