import { SectionLayout, Button, StepModal, AddModal } from "@/components";
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
  const onOpenAddModal = () => {
    open({ children: <AddModal /> });
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
          <Button isLarge={true} onClickHandler={onOpenAddModal}>
            +
          </Button>
        </S.StepSectionContentContainer>
      </SectionLayout>
    </>
  );
};
