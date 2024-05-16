import * as S from "./styled";

export interface ButtonProps {
  children: React.ReactNode;
  onClickHandler: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClickHandler }) => {
  return (
    <>
      <S.ButtonContainer
        onClick={onClickHandler}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.1 }}
      >
        <S.ButtonContentContainer>{children}</S.ButtonContentContainer>
      </S.ButtonContainer>
    </>
  );
};
