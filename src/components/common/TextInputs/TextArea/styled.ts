import styled from "@emotion/styled";

export const TextareaContainer = styled.textarea`
  width: 100%;
  height: 20rem;
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 0.6rem;
  resize: none;
  &:focus {
    border: 1px solid red;
  }
`;
