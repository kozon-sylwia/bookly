import { StyledInput, StyledContactLabel } from "./Contact.styled";

export const InputField = ({ title, type, value, onChange, name }) => {
  return (
    <StyledContactLabel>
      {title}
      <StyledInput type={type} value={value} name={name} onChange={onChange} />
    </StyledContactLabel>
  );
};
