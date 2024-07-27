import * as S from "./styled";

export interface TextAreaProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => {
  return (
    <>
      <S.TextareaContainer value={value} onChange={onChange} />
    </>
  );
};
