import { MotionProps, useMotionValue, useTransform } from 'framer-motion';
import { Image, Stack } from '@mantine/core';

import { Text } from '../Text';
import * as S from './styled';

export interface TiltingCardProps {
  cardImgSrc: string;
  onlyImage?: boolean;
  title?: string;
  description?: string;
  animationProps?: MotionProps;
}

export const TiltingCard: React.FC<TiltingCardProps> = ({
  cardImgSrc,
  onlyImage = true,
  title,
  description,
  animationProps,
}) => {
  const remToPx = (rem: number) => rem * 10;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [remToPx(20), -remToPx(20)], [-30, 30]);
  const rotateY = useTransform(x, [remToPx(15), -remToPx(15)], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const { offsetHeight, offsetWidth } = e.currentTarget;

    const mouseX = e.clientX - (rect.left + offsetWidth / 2);
    const mouseY = e.clientY - (rect.top + offsetHeight / 2);

    x.set((mouseX / offsetWidth) * remToPx(10));
    y.set((mouseY / offsetHeight) * remToPx(15));
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <S.IntroduceSectionMyImgWrapper
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{
          scale: 1.2,
          boxShadow: '0 50px 30px rgba(0, 0, 0, 0.2)',
          filter: 'brightness(1.2) contrast(1.2)',
          backgroundPosition: `${+x / 5 + +y / 5}`,
        }}
        whileTap={{ scale: 1.1 }}
        {...animationProps}>
        {onlyImage ? (
          <Image
            src={cardImgSrc}
            styles={{
              root: {
                transformStyle: 'preserve-3d',
              },
            }}
          />
        ) : (
          <Stack w="100%" align="center" justify="center" gap="md" py="lg" px="md">
            <Image
              src={cardImgSrc}
              w="100%"
              radius="xl"
              styles={{
                root: {
                  transformStyle: 'preserve-3d',
                },
              }}
            />
            <Stack w="100%" align="flex-start" justify="center" gap="10%" px="sm">
              <Text size={2.4} weight={900}>
                {title}
              </Text>
              <Text size={1.6} weight={400}>
                {description}
              </Text>
            </Stack>
          </Stack>
        )}
      </S.IntroduceSectionMyImgWrapper>
    </>
  );
};
