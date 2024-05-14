import React from "react";

import * as S from "./styled";

export interface TextProps {
  size: number;
  weight: number;
  color?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size,
  weight,
  color,
  children,
}) => {
  return (
    <S.TextElement size={size} weight={weight} color={color}>
      {children}
    </S.TextElement>
  );
};
