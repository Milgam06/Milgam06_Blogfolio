import { MotionProps, useMotionValue, useTransform } from 'framer-motion';
import { Image } from '@mantine/core';

import * as S from './styled';

export interface TiltingCardProps {
  cardImgSrc: string;
  animationProps?: MotionProps;
  onClick?: () => void;
}

export const TiltingCard: React.FC<TiltingCardProps> = ({ cardImgSrc, animationProps, onClick }) => {
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
          backgroundPosition: `${+x / 5 + +y / 5}`,
          boxShadow: '0 50px 30px rgba(0, 0, 0, 0.2)',
          filter: 'brightness(1.1) contrast(1.1)',
        }}
        whileTap={{ scale: 1.1 }}
        onClick={onClick}
        {...animationProps}>
        <Image
          src={cardImgSrc}
          styles={{
            root: {
              transformStyle: 'preserve-3d',
            },
          }}
        />
      </S.IntroduceSectionMyImgWrapper>
    </>
  );
};
