import { SectionLayout, Button, StepModal, AddModal, Text } from "@/components";
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
      <SectionLayout title="Exerience" subtitle="저의 소중한 경험들이에요.">
        <S.StepSectionContentContainer {...fadeInScroll({ delay: 0.08 })}>
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
