import { Text } from "@/components";

import * as S from "./styled";
import { Container } from "..";

export interface SectionLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <>
      <S.SectionLayoutContainer>
        <Container>
          <S.SectionLayoutTitleContainer>
            <Text size={5} weight={800}>
              {title}
            </Text>
          </S.SectionLayoutTitleContainer>
        </Container>
      </S.SectionLayoutContainer>
    </>
  );
};
