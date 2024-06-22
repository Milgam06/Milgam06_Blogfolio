import { SectionLayout, Button, StepModal } from "@/components";
import { useFadeInScroll } from "@/hooks";
import { useModal } from "@/providers";

import * as S from "./styled";

export const StepSection: React.FC = () => {
  const { open } = useModal();
  const { fadeInScroll } = useFadeInScroll();
  const onClick = () => {
    open({ children: <StepModal /> });
    console.log("asdf");
  };
  return (
    <>
      <SectionLayout>
        <S.StepSectionContentContainer {...fadeInScroll({ delay: 0.1 })}>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
          <Button isLarge={true} onClickHandler={onClick}>
            asdf
          </Button>
        </S.StepSectionContentContainer>
      </SectionLayout>
    </>
  );
};
