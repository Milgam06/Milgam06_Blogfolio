import { useMemo } from 'react';
import { Stack, Timeline, TimelineItem, TimelineItemProps } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBuilding, faHammer } from '@fortawesome/free-solid-svg-icons';
import { useDidMount, useDidUpdate } from 'rooks';
import { useInView } from 'framer-motion';

import { TiltingCard, Text, BaseLayout } from '@/components';
import { INTRODUCE_SECTION_WHOAMI } from '@/constant';
import { WhoamiPlacardImg } from '@/assets';

interface ITimelineItemProps {
  title: string;
  turnaroundTime: string;
  description: string;
  isNextInactive?: boolean;
  icon: React.ReactNode;
}

export const IntroduceSection: React.FC = () => {
  const { nick, name, login, email, github, birth } = useMemo(() => {
    return INTRODUCE_SECTION_WHOAMI;
  }, []);

  const timelineItems: ITimelineItemProps[] = [
    {
      title: 'HighSchool',
      turnaroundTime: '2022.03 ~ 2025.02',
      description: '고등학교 재학 중',
      icon: <FontAwesomeIcon icon={faSchool} />,
    },
    {
      title: 'Mecher.INC',
      turnaroundTime: '2024.08 ~ 2024.10',
      description: '인턴쉽 경험',
      icon: <FontAwesomeIcon icon={faBuilding} />,
    },
    {
      title: 'SilviaHealth.INC',
      turnaroundTime: '2024.12 ~ 2025.04',
      description: '인턴쉽 경험',
      icon: <FontAwesomeIcon icon={faBuilding} />,
    },
    {
      title: '"MyCertification" Project',
      turnaroundTime: '2025.05 ~ ',
      description: '개인 프로젝트 진행 중',
      icon: <FontAwesomeIcon icon={faHammer} />,
    },
    {
      title: '"MyCertification" Project',
      turnaroundTime: '2025.05 ~ ',
      description: '개인 프로젝트 진행 중',
      icon: <FontAwesomeIcon icon={faHammer} />,
    },
    {
      title: '"MyCertification" Project',
      turnaroundTime: '2025.05 ~ ',
      description: '개인 프로젝트 진행 중',
      icon: <FontAwesomeIcon icon={faHammer} />,
    },
    {
      title: '"MyCertification" Project',
      turnaroundTime: '2025.05 ~ ',
      description: '개인 프로젝트 진행 중',
      icon: <FontAwesomeIcon icon={faHammer} />,
    },
    {
      title: '"MyCertification" Project',
      turnaroundTime: '2025.05 ~ ',
      description: '개인 프로젝트 진행 중',
      icon: <FontAwesomeIcon icon={faHammer} />,
    },
    {
      title: '"MyCertification" Project',
      turnaroundTime: '2025.05 ~ ',
      description: '개인 프로젝트 진행 중',
      icon: <FontAwesomeIcon icon={faHammer} />,
    },
    {
      title: '"MyCertification" Project',
      turnaroundTime: '2025.05 ~ ',
      description: '개인 프로젝트 진행 중',
      icon: <FontAwesomeIcon icon={faHammer} />,
    },
  ];

  const timelineActiveIndex = useMemo(() => {
    const lastActiveItemIndex = timelineItems.length - 2;
    return lastActiveItemIndex;
  }, [timelineItems.length]);

  return (
    <>
      <BaseLayout
        isFullWidth
        justify="space-between"
        align="center"
        direction={{ base: 'column', sm: 'row' }}
        gap="20%">
        <Stack w="100%">
          <TiltingCard onlyImage={false} title={name} description={nick} cardImgSrc={WhoamiPlacardImg} />
        </Stack>
        <Stack w="100%" align="flex-start" justify="center" gap="xl">
          <Text size={6} weight={800}>
            Time-line
          </Text>
          <Timeline
            mah={400}
            bulletSize={48}
            lineWidth={6}
            active={timelineActiveIndex}
            px={80}
            styles={{
              root: {
                overflow: 'auto',
              },
            }}>
            {timelineItems.map((item, index) => {
              const isNextInactiveItem = index === timelineItems.length - 2;
              const lineVariant: TimelineItemProps['lineVariant'] = isNextInactiveItem ? 'dashed' : 'solid';

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
          </Timeline>
        </Stack>
      </BaseLayout>
    </>
  );
};
