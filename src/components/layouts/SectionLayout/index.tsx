import { Text } from "@/components";

import * as S from "./styled";
import { Container } from "..";
import React from "react";

export interface SectionLayoutProps {
  title: string | React.ReactNode;
  subtitle?: string | false;
  children?: React.ReactNode;
  sectionBackgroundColor?: string;
}

/**
 *
 * @param title[string]: Section's title
 * @param subtitle[string]: Section's subtitle
 * @param children[React.ReactNode]: Section's content
 * @param sectionBackgroundColor[string]: Section's background color
 */
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
          {children ? (
            <S.SectionLayoutContentContainer>
              {children}
            </S.SectionLayoutContentContainer>
          ) : (
            <></>
          )}
        </Container>
      </S.SectionLayoutContainer>
    </>
  );
};
