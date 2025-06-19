import { memo, useMemo } from 'react';
import { Flex, SimpleGrid, Stack } from '@mantine/core';

import { TechStackBox, Text, BaseLayout, Tabs, ITabsItemProps } from '@/components';
import { ETechStack, INTRODUCE_SECTION_WHOAMI } from '@/constant';

export const TechStackSection: React.FC = memo(() => {
  const { techStack } = INTRODUCE_SECTION_WHOAMI;
  const techStacks = Object.values(ETechStack);

  const techStackTabsItem: ITabsItemProps[] = useMemo(() => {
    const techStackTabs: ITabsItemProps[] = techStacks.map((subject) => {
      const subjectItems = techStack[subject];
      const tabsItem = (
        <Stack w="100%" align="center" justify="flex-start" gap="xl">
          <Text size={2} weight={900}>
            {subject}
          </Text>
          <SimpleGrid w="100%" cols={4} spacing="md" verticalSpacing={60}>
            {subjectItems.map((techStackItem) => (
              <TechStackBox key={techStackItem} techStack={techStackItem} />
            ))}
          </SimpleGrid>
        </Stack>
      );
      return {
        tabsValue: subject,
        tabsItem,
      };
    });
    return techStackTabs;
  }, []);

  return (
    <>
      <BaseLayout direction="column" justify="flex-start" align="center" gap={100}>
        <Text size={8} weight={900} color="linear-gradient(to right, #FF8C42 0%, #FFE5B4 50%,#FF8C42 100%)">
          My TechStacks
        </Text>
        <Tabs width="100%" defaultValue={techStackTabsItem[0].tabsValue} tabsItems={techStackTabsItem} listGrow />
      </BaseLayout>
    </>
  );
});
