import { memo, useMemo } from 'react';
import { Timeline as MantineTimeline, Stack, TimelineItem, TimelineItemProps } from '@mantine/core';

import { Text } from '@/components';

export interface ITimelineItemProps {
  title: string;
  turnaroundTime: string;
  description: string;
  icon: React.ReactNode;
}

interface ITimelineProps {
  timelineItems: ITimelineItemProps[];
  isLastDashedActive?: boolean;
}

export const Timeline: React.FC<ITimelineProps> = memo(({ timelineItems, isLastDashedActive }) => {
  const timelineActiveIndex = useMemo(() => {
    const lastActiveItemIndex = isLastDashedActive ? timelineItems.length - 2 : timelineItems.length - 1;
    return lastActiveItemIndex;
  }, [isLastDashedActive, timelineItems.length]);

  return (
    <MantineTimeline
      mah={440}
      bulletSize={48}
      lineWidth={6}
      active={timelineActiveIndex}
      px={40}
      styles={{
        root: {
          overflow: 'auto',
        },
      }}>
      {timelineItems.map((item, index) => {
        const isNextInactiveItem = index === timelineItems.length - 2;
        const isLastDahsed = isLastDashedActive && isNextInactiveItem;
        const lineVariant: TimelineItemProps['lineVariant'] = isLastDahsed ? 'dashed' : 'solid';

        return (
          <TimelineItem
            key={index}
            lineVariant={lineVariant}
            title={
              <Text size={2.4} weight={900}>
                {item.title}
              </Text>
            }
            bullet={item.icon}
            p={0}
            px="xs">
            <Stack justify="center" align="flex-start" gap="xs">
              <Text size={1} weight={400} color="#c6c6c6">
                {item.turnaroundTime}
              </Text>
              <Text size={1.4} weight={400}>
                {item.description}
              </Text>
            </Stack>
          </TimelineItem>
        );
      })}
    </MantineTimeline>
  );
});
