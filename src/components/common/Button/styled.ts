import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface ButtonStyleProps {
  scale: boolean;
}

export const ButtonContainer = styled(motion.div)<ButtonStyleProps>`
  /* width: 14rem; */
  width: ${({ scale }) => (scale ? "18rem" : "12rem")};
  height: ${({ scale }) => (scale ? "24rem" : "16rem")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #aeaeae;
  border-radius: 1rem;
  background-color: #fff;
  cursor: pointer;
`;

export const ButtonContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;
