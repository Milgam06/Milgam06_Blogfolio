import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const IntroduceSectionContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, 1fr);
`;

export const IntroduceSectionMyImgWrapper = styled(motion.div)`
  width: 300px;
  height: 500px;
  perspective: 1000px;
`;

export const IntroduceSectionMyImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;
