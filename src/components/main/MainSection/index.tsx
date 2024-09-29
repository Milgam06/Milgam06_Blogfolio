import { SectionLayout, Text, TitleWrapper } from "@/components";

import * as S from "./styled";

export const MainSection: React.FC = () => {
  return (
    <>
      <SectionLayout sectionBackgroundColor="#fefefe" fullScreen={true}>
        <S.MainSectionContentContainer>
          <S.MainSectionTitleContainer>
            <TitleWrapper
              animationProps={{
                initial: {
                  opacity: 0.6,
                  scaleX: 0.2,
                },
                animate: {
                  opacity: 1,
                  scaleX: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0,
                  },
                },
              }}
            >
              <Text
                size={10}
                weight={900}
                animationProps={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.8 },
                  },
                }}
                color="#fefefe"
              >
                I am{" "}
                <Text
                  size={10}
                  weight={900}
                  color="linear-gradient(to right, #fffcf2,#F29773)"
                >
                  MILGAM
                </Text>
              </Text>
            </TitleWrapper>
            <TitleWrapper
              animationProps={{
                initial: {
                  opacity: 0.6,
                  scaleX: 0.4,
                },
                animate: {
                  opacity: 1,
                  scaleX: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0,
                  },
                },
              }}
            >
              <Text
                size={3}
                weight={700}
                animationProps={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { duration: 0.8, delay: 1 },
                  },
                }}
                color="#fefefe"
              >
                소통하며 생각하는 개발자
              </Text>
            </TitleWrapper>
          </S.MainSectionTitleContainer>
          {/* <S.MainSectionEmojiWrapper>
            <S.EmojiBgCircle
              initial={{
                opacity: 0.2,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            />
            <S.MainSectionEmoji
              src="/MilgamEmo.svg"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8 },
              }}
            />
          </S.MainSectionEmojiWrapper> */}
        </S.MainSectionContentContainer>
      </SectionLayout>
    </>
  );
};
