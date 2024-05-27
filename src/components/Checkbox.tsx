// Import necessary component definition (FC) from React
import { FC } from 'react';
import { CheckBoxStyled, SpanStyled } from '../styles/CheckBox.styled';

// Interface for Checkbox component props
interface CheckboxProps {
  label: string; // Text to display next to the checkbox
  id: string; // Unique identifier for the checkbox element
  isChecked: boolean; // Current checked state of the checkbox (true or false)
  setIsChecked: (value: boolean) => void; // Function to update the checkbox state
}

// Checkbox functional component
const Checkbox: FC<CheckboxProps> = ({ label, id, isChecked, setIsChecked }) => {
  // Return JSX to render the checkbox element
  return (
    
    <CheckBoxStyled>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        id={id}
      />
      <SpanStyled />
      {label}
    </CheckBoxStyled>

  
  
  );
};

export default Checkbox;
