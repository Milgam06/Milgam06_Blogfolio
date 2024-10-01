import * as S from "./styled";

export interface StepButtonProps extends S.ButtonStyleProps {
  children: React.ReactNode;
  onClickHandler: () => void;
  hasImage?: boolean;
  imgSrc?: string;
}

export const StepButton: React.FC<StepButtonProps> = ({
  isLarge,
  children,
  hasImage,
  imgSrc,
  onClickHandler,
}) => {
  return (
    <>
      <S.ButtonContainer
        isLarge={isLarge}
        onClick={onClickHandler}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
        }}
        transition={{ duration: 0.1 }}
      >
        <S.ButtonContentContainer>
          {hasImage ? (
            <>
              <S.ButtonContentImage src={imgSrc} />
              <S.ButtonContentTextWrapper>
                {children}
              </S.ButtonContentTextWrapper>
            </>
          ) : (
            <>{children}</>
          )}
        </S.ButtonContentContainer>
      </S.ButtonContainer>
    </>
  );
};
