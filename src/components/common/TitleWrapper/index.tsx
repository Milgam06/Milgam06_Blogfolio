import { MotionProps } from "framer-motion";

import * as S from "./styled";

export interface TitleWrapperElementProps
  extends S.TitleWrapperElementStyleProps {
  children: React.ReactNode;
  animationProps?: MotionProps;
}

export const TitleWrapper: React.FC<TitleWrapperElementProps> = ({
  children,
  animationProps,
  padding,
}) => {
  return (
    <S.TitleWrapperElement padding={padding} {...animationProps}>
      {children}
    </S.TitleWrapperElement>
  );
};
