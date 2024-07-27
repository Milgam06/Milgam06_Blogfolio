import * as S from "./styled";

export interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <>
      <S.InputContainer value={value} onChange={onChange} />
    </>
  );
};
