import { useCallback, useMemo } from 'react';
import { Flex, Stack } from '@mantine/core';

import { TiltingCard, Text, BaseLayout, ITabsItemProps, Tabs, AboutMe, MyTimeline } from '@/components';
import { BUY_ME_A_COFFEE_URL, INTRODUCE_SECTION_WHOAMI } from '@/constant';
import { WhoamiIntroduceImg } from '@/assets';

export const IntroduceSection: React.FC = () => {
  const { name, birth } = useMemo(() => {
    return INTRODUCE_SECTION_WHOAMI;
  }, []);

  const handleClickPlacard = useCallback(() => {
    window.open(BUY_ME_A_COFFEE_URL, '_blank');
  }, []);

  const items: ITabsItemProps[] = [
    {
      tabsValue: 'whoami',
      tabsLabel: 'Who am I?',
      tabsItem: <AboutMe />,
    },
    {
      tabsValue: 'timeline',
      tabsLabel: 'Timeline',
      tabsItem: <MyTimeline />,
    },
  ];

  return (
    <>
      <BaseLayout isFullWidth justify="center" align="center">
        <Stack justify="center" align="center" gap={80}>
          <Text size={8} weight={900} color="linear-gradient(to right, #FF8C42 0%, #FFE5B4 50%,#FF8C42 100%)">
            About Me
          </Text>
          <Flex w="100%" direction={{ base: 'column', sm: 'row' }} align="flex-start" justify="center" gap={80}>
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
            <Tabs
              tabsItems={items}
              defaultValue="whoami"
              listGrow
              tabsStyles={{
                root: {
                  overflow: 'auto',
                },
              }}
              tabsTabStyles={{
                tabLabel: {
                  fontSize: '1.2rem',
                  fontWeight: 600,
                },
              }}
            />
          </Flex>
        </Stack>
      </BaseLayout>
    </>
  );
};
