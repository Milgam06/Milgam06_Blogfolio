import { SectionLayout, Text } from "@/components";

import * as S from "./styled";

export const MainSection: React.FC = () => {
  return (
    <>
      {/* <SectionLayout
        title={
          <span>
            제 이름은{" "}
            <Text
              size={6}
              weight={900}
              color="linear-gradient(to right, #A871FD,#021AA6)"
            >
              박여준
            </Text>
            입니다
          </span>
        }
        subtitle="소통하며 생각하는 개발자"
      ></SectionLayout> */}
      <SectionLayout sectionBackgroundColor="#000">
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
            color="linear-gradient(to right, #cba8ff,#0e2ee2)"
          >
            {"{ 박여준 }"}
          </Text>
          <Text
            size={3}
            weight={700}
            color="linear-gradient(to right, #0e2ee2,#cba8ff)"
          >
            소통하며 생각하는 개발자
          </Text>
        </S.MainSectionTitleContainer>
      </SectionLayout>
    </>
  );
};
