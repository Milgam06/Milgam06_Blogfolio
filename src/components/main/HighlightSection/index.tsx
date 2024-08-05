import { SectionLayout } from "@/components";
import { useFadeInScroll } from "@/hooks";

import * as S from "./styled";

export const HighlightSection: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();
  return (
    <>
      <SectionLayout fullScreen={true}>
        <S.HighlightSectionContainer {...fadeInScroll({ delay: 0.08 })}>
          <h1>Highlight Section</h1>
        </S.HighlightSectionContainer>
      </SectionLayout>
    </>
  );
};
