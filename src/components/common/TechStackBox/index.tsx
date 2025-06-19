import {
  ITechStackFrontend,
  ITechStackLanguage,
  ITechStackBackend,
  ITechStackMiddleware,
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
  | ITechStackMiddleware
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

  return (
    <Stack w="100%" justify="flex-end" align="center" gap="sm">
      {icon}
      <Text size={1.2} weight={600} textAlign="center" color={defaultColor}>
        {techStack}
      </Text>
    </Stack>
  );
});
