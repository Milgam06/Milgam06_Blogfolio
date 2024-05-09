import * as S from "./styled";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <S.DefaultLayoutContainer>{children}</S.DefaultLayoutContainer>
    </>
  );
};
