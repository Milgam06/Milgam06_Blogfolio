import { CenterContainer } from "@/components/styles";

import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const AddModalContainer = styled(CenterContainer)`
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.2rem 2rem;
`;

export const AddModalHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddModalContentContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 30rem;
  gap: 0.6rem;
`;

export const AddModalFileUploadContainer = styled(CenterContainer)`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.6rem;
  padding: 2rem 1rem;
`;

export const AddModalSubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 0;
  margin-top: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
`;
