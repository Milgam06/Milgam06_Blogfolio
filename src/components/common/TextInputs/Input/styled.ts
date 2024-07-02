import styled from "@emotion/styled";

export const InputContainer = styled.input`
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
  border: 1px solid #ccc;
  border-radius: 0.6rem;
  &:focus {
    border: 1px solid red;
  }
`;
