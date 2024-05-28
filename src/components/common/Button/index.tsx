import * as S from "./styled";

export interface ButtonProps extends S.ButtonStyleProps {
  children: React.ReactNode;
  onClickHandler: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  scale,
  children,
  onClickHandler,
}) => {
  return (
    <>
      <S.ButtonContainer
        scale={scale}
        onClick={onClickHandler}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.1 }}
      >
        <S.ButtonContentContainer>{children}</S.ButtonContentContainer>
      </S.ButtonContainer>
    </>
  );
};
