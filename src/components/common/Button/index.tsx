import * as S from "./styled";

export interface ButtonProps extends S.ButtonStyleProps {
  children: React.ReactNode;
  onClickHandler: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  isLarge,
  children,
  onClickHandler,
}) => {
  return (
    <>
      <S.ButtonContainer
        isLarge={isLarge}
        onClick={onClickHandler}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 8px 10px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 0.1 }}
      >
        <S.ButtonContentContainer>{children}</S.ButtonContentContainer>
      </S.ButtonContainer>
    </>
  );
};
