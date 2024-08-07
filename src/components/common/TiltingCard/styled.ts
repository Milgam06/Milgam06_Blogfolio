import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const IntroduceSectionMyImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 40rem;
  perspective: 1000px;
  border-radius: 1rem;
`;

export const IntroduceSectionMyImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  border-radius: 1rem;
`;
