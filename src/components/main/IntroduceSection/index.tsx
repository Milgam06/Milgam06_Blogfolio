import { SectionLayout, TiltingCard } from "@/components";
import { useFadeInScroll } from "@/hooks";
import { WhoamiImg } from "@/assets";

import * as S from "./styled";

export const IntroduceSection: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();
  return (
    <>
      <SectionLayout>
        <S.IntroduceSectionContainer {...fadeInScroll({ delay: 0.08 })}>
          <TiltingCard cardImgSrc={WhoamiImg} />
        </S.IntroduceSectionContainer>
      </SectionLayout>
    </>
  );
};
