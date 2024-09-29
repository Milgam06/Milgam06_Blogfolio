import React from "react";

import { Text, TitleWrapper } from "@/components";

import * as S from "./styled";
import { Container } from "..";

export interface SectionLayoutProps {
  title?: string | React.ReactNode;
  subtitle?: string | false;
  children?: React.ReactNode;
  sectionBackgroundColor?: string;
  fullScreen?: boolean;
}

/**
 *
 * @param title[string]: Section's title
 * @param subtitle[string]: Section's subtitle
 * @param children[React.ReactNode]: Section's content
 * @param sectionBackgroundColor[string]: Section's background color
 * @param fullScreen[boolean]: Section's full screen option
 */
export const SectionLayout: React.FC<SectionLayoutProps> = ({
  title,
  subtitle,
  children,
  sectionBackgroundColor,
  fullScreen = false,
}) => {
  return (
    <>
      <S.SectionLayoutContainer backgroundColor={sectionBackgroundColor}>
        {fullScreen ? (
          <>
            {title ? (
              <S.SectionLayoutTitleContainer>
                <TitleWrapper>
                  <Text size={4.6} weight={900} color="#fefefe">
                    {title}
                  </Text>
                </TitleWrapper>
                {subtitle ? (
                  <Text size={1.6} weight={300}>
                    {subtitle}
                  </Text>
                ) : (
                  <></>
                )}
              </S.SectionLayoutTitleContainer>
            ) : (
              <> </>
            )}
            {children ? (
              <S.SectionLayoutContentContainer>
                {children}
              </S.SectionLayoutContentContainer>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <Container>
              {title ? (
                <S.SectionLayoutTitleContainer>
                  <TitleWrapper>
                    <Text size={4.6} weight={900} color="#fefefe">
                      {title}
                    </Text>
                  </TitleWrapper>
                  {subtitle ? (
                    <Text size={1.6} weight={300}>
                      {subtitle}
                    </Text>
                  ) : (
                    <></>
                  )}
                </S.SectionLayoutTitleContainer>
              ) : (
                <> </>
              )}
              {children ? (
                <S.SectionLayoutContentContainer>
                  {children}
                </S.SectionLayoutContentContainer>
              ) : (
                <></>
              )}
            </Container>
          </>
        )}
      </S.SectionLayoutContainer>
    </>
  );
};
