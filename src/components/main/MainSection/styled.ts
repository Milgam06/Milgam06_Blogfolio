import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MainSectionContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainSectionTitleContainer = styled(motion.div)`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;

export const MainSectionEmojiWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const MainSectionEmoji = styled(motion.img)`
  position: relative;
  width: 26rem;
  bottom: 0;
  z-index: 2;
`;

export const EmojiBgCircle = styled(motion.div)`
  position: absolute;
  width: 34rem;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 254, 249, 0.8);
  border-radius: 50%;
  z-index: 1;
  margin-bottom: 6rem;
  box-shadow: 0 0 4rem 4rem rgba(255, 254, 249, 0.8);
`;
