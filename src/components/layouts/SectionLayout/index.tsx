import { Text } from "@/components";

import * as S from "./styled";
import { Container } from "..";

export interface SectionLayoutProps {
  title: string;
  subtitle?: string | false;
  children: React.ReactNode;
  sectionBackgroundColor?: string;
  color?: string;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  title,
  subtitle,
  children,
  sectionBackgroundColor,
}) => {
  return (
    <>
      <S.SectionLayoutContainer backgroundColor={sectionBackgroundColor}>
        <Container>
          <S.SectionLayoutTitleContainer>
            <Text size={5} weight={900}>
              {title}
            </Text>
            {subtitle ? (
              <Text size={1.6} weight={300}>
                {subtitle}
              </Text>
            ) : (
              <></>
            )}
          </S.SectionLayoutTitleContainer>
          <S.SectionLayoutContentContainer>
            {children}
          </S.SectionLayoutContentContainer>
        </Container>
      </S.SectionLayoutContainer>
    </>
  );
};
