import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface ButtonStyleProps {
  isLarge: boolean;
}

export const ButtonContainer = styled(motion.div)<ButtonStyleProps>`
  width: ${({ isLarge }) => (isLarge ? "20rem" : "16rem")};
  height: ${({ isLarge }) => (isLarge ? "20rem" : "16rem")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #aeaeae;
  border-radius: 1rem;
  background-color: #fff;
  cursor: pointer;
  overflow: hidden;
`;

export const ButtonContentContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContentImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 0.7;
  object-fit: cover;
`;

export const ButtonContentTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: row;
  align-items: center;
  padding: 0 2rem;
`;
