import React from "react";
import { MotionProps } from "framer-motion";

import * as S from "./styled";

export interface TextProps {
  size: number;
  weight: number;
  color?: string;
  animationProps?: MotionProps;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size,
  weight,
  color,
  animationProps,
  onClick,
  children,
}) => {
  return (
    <S.TextElement
      size={size}
      weight={weight}
      color={color}
      onClick={onClick}
      {...animationProps}
    >
      {children}
    </S.TextElement>
  );
};
