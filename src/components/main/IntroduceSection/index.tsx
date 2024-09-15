import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

import { SectionLayout, TiltingCard, Text } from "@/components";
import { INTRODUCE_SECTION_WHOAMI } from "@/constant";
import { useFadeInScroll } from "@/hooks";
import { WhoamiImg, ComputerSVG, KoreaFlagSVG, MilgamSVG } from "@/assets";

import * as S from "./styled";

const IntroduceTextHeader: React.FC = () => {
  return (
    <S.IntroduceContentContainer>
      <S.IntroduceContentTextIconContainer>
        <Text size={7} weight={800}>
          {INTRODUCE_SECTION_WHOAMI.nick}
        </Text>
        <S.IntroduceIcon
          src={MilgamSVG}
          style={{ width: "7rem", height: "7rem" }}
        />
      </S.IntroduceContentTextIconContainer>
      <Text size={1.4} weight={300}>
        {INTRODUCE_SECTION_WHOAMI.birth}
      </Text>
    </S.IntroduceContentContainer>
  );
};

const IntroduceTextMain: React.FC = () => {
  return (
    <S.IntroduceContentContainer>
      <Text size={2.4} weight={600}>
        {INTRODUCE_SECTION_WHOAMI.name}
      </Text>
      <S.IntroduceContentTextIconContainer>
        <Text size={2.4} weight={600}>
          {INTRODUCE_SECTION_WHOAMI.role}
        </Text>
        <S.IntroduceIcon src={ComputerSVG} />
      </S.IntroduceContentTextIconContainer>
      <S.IntroduceContentTextIconContainer>
        <Text size={2.4} weight={600}>
          {INTRODUCE_SECTION_WHOAMI.nationality}
        </Text>
        <S.IntroduceIcon src={KoreaFlagSVG} />
      </S.IntroduceContentTextIconContainer>
    </S.IntroduceContentContainer>
  );
};

const IntroduceTextFooter: React.FC = () => {
  const onMoveGithub = () => {
    window.open(INTRODUCE_SECTION_WHOAMI.github, "_blank");
  };
  const onMoveEmail = () => {
    window.open(`mailto:${INTRODUCE_SECTION_WHOAMI.email}`);
  };
  return (
    <S.IntroduceIconContainer>
      <S.IntroduceIconContentContainer>
        <FontAwesomeIcon
          icon={faGithub}
          style={{
            width: "4rem",
            height: "4rem",
            opacity: 1,
            cursor: "pointer",
          }}
          onClick={onMoveGithub}
        />
        {/* <Text size={1.4} weight={600} onClick={onMoveGithub}>
          GITHUB
        </Text> */}
      </S.IntroduceIconContentContainer>

      <S.IntroduceIconContentContainer>
        <FontAwesomeIcon
          icon={faAt}
          style={{
            width: "4rem",
            height: "4rem",
            opacity: 1,
            cursor: "pointer",
          }}
          onClick={onMoveEmail}
        />
        {/* <Text size={1.4} weight={600} onClick={onMoveEmail}>
          EMAIL
        </Text> */}
      </S.IntroduceIconContentContainer>
    </S.IntroduceIconContainer>
  );
};

export const IntroduceSection: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();

  return (
    <>
      <SectionLayout sectionBackgroundColor="linear-gradient(to bottom, #52b788,#b7e4c7)">
        <S.IntroduceSectionContainer {...fadeInScroll({ delay: 0.08 })}>
          <TiltingCard cardImgSrc={WhoamiImg} />
          <S.IntroduceSectionTextContainer>
            <IntroduceTextHeader />
            <IntroduceTextMain />
            <IntroduceTextFooter />
          </S.IntroduceSectionTextContainer>
        </S.IntroduceSectionContainer>
      </SectionLayout>
    </>
  );
};
