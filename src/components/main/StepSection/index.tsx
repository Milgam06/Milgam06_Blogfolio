import { SectionLayout, Text, Button } from "@/components";
import { useFadeInScroll } from "@/hooks";

import * as S from "./styled";

export const StepSection: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <SectionLayout>
        <S.StepSectionContentContainer {...fadeInScroll({ delay: 2 })}>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button scale={true} onClickHandler={onClick}>
            asdf
          </Button>
        </S.StepSectionContentContainer>
      </SectionLayout>
    </>
  );
};
