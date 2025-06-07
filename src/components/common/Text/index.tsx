import React from 'react';
import { MotionProps } from 'framer-motion';

import * as S from './styled';

export interface TextProps {
  size: number;
  weight: number;
  color?: string;
  textAlign?: 'center' | 'left' | 'right';
  animationProps?: MotionProps;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ size, weight, color, textAlign, animationProps, onClick, children }) => {
  return (
    <S.TextElement
      size={size}
      weight={weight}
      color={color}
      onClick={onClick}
      textAlign={textAlign}
      {...animationProps}>
      {children}
    </S.TextElement>
  );
};
