import { MotionProps } from "framer-motion";

import * as S from "./styled";

export interface TitleWrapperElementProps {
  children: React.ReactNode;
  animationProps?: MotionProps;
}

export const TitleWrapper: React.FC<TitleWrapperElementProps> = ({
  children,
  animationProps,
}) => {
  return (
    <S.TitleWrapperElement {...animationProps}>
      {children}
    </S.TitleWrapperElement>
  );
};
