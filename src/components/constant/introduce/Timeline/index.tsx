import { memo } from 'react';
import { faBuilding, faSchool } from '@fortawesome/free-solid-svg-icons';

import { ITimelineItemProps, Timeline } from '@/components/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stack } from '@mantine/core';
export const MyTimeline: React.FC = memo(() => {
  const timelineItems: ITimelineItemProps[] = [
    {
      title: 'HighSchool',
      turnaroundTime: '2022.03 ~ 2025.02',
      description: '한세사이버보안고등학교에 입학했습니다.',
      icon: <FontAwesomeIcon icon={faSchool} />,
    },
    {
      title: 'Internship: Mesher Inc',
      turnaroundTime: '2024.08 ~ 2024.10',
      description: 'Mesher Inc에서 인턴십을 진행했습니다.',
      icon: <FontAwesomeIcon icon={faBuilding} />,
    },
    {
      title: 'Internship: SilviaHealth Inc',
      turnaroundTime: '2024.12 ~ 2025.04',
      description: 'SilviaHealth Inc에서 인턴십을 진행했습니다.',
      icon: <FontAwesomeIcon icon={faBuilding} />,
    },
  ];

  return (
    <Stack justify="center" align="center" py="sm">
      <Timeline timelineItems={timelineItems} />
    </Stack>
  );
});
