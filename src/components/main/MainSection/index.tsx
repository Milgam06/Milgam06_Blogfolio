import { SectionLayout, Text } from "@/components";

import * as S from "./styled";

export const MainSection: React.FC = () => {
  return (
    <>
      <SectionLayout
        // sectionBackgroundColor="linear-gradient(to bottom right, #ffc971,#52b788)"
        sectionBackgroundColor="#f0ebd8"
        fullScreen={true}
      >
        <S.MainSectionContentContainer>
          <S.MainSectionTitleContainer
            initial={{
              opacity: 0.2,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeIn", delay: 0 },
            }}
          >
            <Text
              size={10}
              weight={900}
              color="
            linear-gradient(to right, #748cab, #40916c)
            "
            >
              I am
              <br />
              박여준
            </Text>

            <Text
              size={3}
              weight={700}
              color="linear-gradient(to right, #40916c, #748cab)"
              // color="#1d2d44"
            >
              소통하며 생각하는 개발자
            </Text>
          </S.MainSectionTitleContainer>
          <S.MainSectionEmojiWrapper>
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
          </S.MainSectionEmojiWrapper>
        </S.MainSectionContentContainer>
      </SectionLayout>
    </>
  );
};
