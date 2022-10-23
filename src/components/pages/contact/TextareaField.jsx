import { StyledTextarea, StyledContactLabel } from "./Contact.styled";

export const TextareaField = ({ title, value, onChange, name }) => {
  return (
    <StyledContactLabel>
      {title}
      <StyledTextarea value={value} name={name} onChange={onChange} />
    </StyledContactLabel>
  );
};
