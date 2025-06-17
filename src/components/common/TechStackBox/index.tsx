import {
  ITechStackFrontend,
  ITechStackLanguage,
  ITechStackBackend,
  ITechStackDatabase,
  ITechStackQuery,
  ITechStackStyle,
  ITechStackTool,
  IconTable,
} from '@/constant';
import { AspectRatio, Stack } from '@mantine/core';
import React from 'react';
import { useMemo } from 'react';
import { memo } from 'react';
import { Text } from '../Text';

type ITechStack =
  | ITechStackLanguage
  | ITechStackFrontend
  | ITechStackBackend
  | ITechStackDatabase
  | ITechStackQuery
  | ITechStackStyle
  | ITechStackTool;

interface ITechStackBoxProps {
  techStack: ITechStack;
}

export const TechStackBox: React.FC<ITechStackBoxProps> = memo(({ techStack }) => {
  const { icon, defaultColor } = useMemo(() => {
    const techStackIconData = IconTable[techStack];
    const icon = techStackIconData.icon;
    const hasDefaultColor = techStackIconData.defaultColor !== undefined;
    const defaultColor = hasDefaultColor ? techStackIconData.defaultColor : '#000000';

    return { icon, defaultColor };
  }, [techStack]);
  console.log(defaultColor);

  return (
    <AspectRatio w={128} ratio={1} bg="rgba(0,0,0,0.1)" styles={{ root: { borderRadius: '8px' } }}>
      <Stack justify="center" align="center" gap="sm">
        {icon}
        <Text size={1.2} weight={900}>
          {techStack}
        </Text>
      </Stack>
    </AspectRatio>
  );
});
