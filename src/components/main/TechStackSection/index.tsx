import { memo } from 'react';
import { Flex } from '@mantine/core';

import { TechStackBox, Text, BaseLayout } from '@/components';
import { ETechStack, INTRODUCE_SECTION_WHOAMI } from '@/constant';

export const TechStackSection: React.FC = memo(() => {
  const { techStack } = INTRODUCE_SECTION_WHOAMI;
  const techStacks = Object.values(ETechStack);

  return (
    <>
      <BaseLayout isFullWidth direction="column" justify="center" align="center" gap={100}>
        <Text size={8} weight={900} color="linear-gradient(to right, #FF8C42 0%, #FFE5B4 50%,#FF8C42 100%)">
          My TechStacks
        </Text>

        {techStacks.map((subject) => {
          const techStackSubjects = techStack[subject];
          return (
            <>
              <Flex w="100%" justify="center" align="center" gap="lg" wrap="wrap">
                {techStackSubjects.map((techStackItem) => {
                  return <TechStackBox key={techStackItem} techStack={techStackItem} />;
                })}
              </Flex>
            </>
          );
        })}
      </BaseLayout>
    </>
  );
});
