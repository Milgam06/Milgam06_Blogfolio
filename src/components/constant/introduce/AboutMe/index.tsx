import { Text } from '@/components';
import { INTRODUCE_SECTION_WHOAMI } from '@/constant';
import { List, Stack } from '@mantine/core';
import { memo, useMemo } from 'react';

export const AboutMe: React.FC = memo(() => {
  const { AboutMeTitle, AboutMeDescription } = useMemo(() => {
    const AboutMeTitle = INTRODUCE_SECTION_WHOAMI.aboutMe.title;
    const AboutMeDescription = INTRODUCE_SECTION_WHOAMI.aboutMe.descriptions;
    return { AboutMeTitle, AboutMeDescription };
  }, []);

  return (
    <>
      <Stack justify="flex-start" align="flex-start" w="100%" gap="xl" py="sm">
        {AboutMeTitle.map((title, index) => {
          const titleKey = `title-${index}`;
          return (
            <Text key={titleKey} size={2.4} weight={900}>
              {title}
            </Text>
          );
        })}
        <Stack justify="flex-start" align="flex-start" w="100%">
          <List spacing="sm" listStyleType="disc" withPadding>
            {AboutMeDescription.map((description, index) => {
              const descriptionKey = `description-${index}`;
              return (
                <List.Item key={descriptionKey}>
                  <Text size={1.6} weight={600}>
                    {description}
                  </Text>
                </List.Item>
              );
            })}
          </List>
        </Stack>
      </Stack>
    </>
  );
});
