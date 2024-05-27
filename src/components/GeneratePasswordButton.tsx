import { FC } from "react";
import IconArrowRight from "../assets/svgIconArrowRight";
import generatePassword from "../utils/generatePassword";  

// Interface for GeneratePasswordButton component props
interface GeneratePasswordButtonProps {
  setPassword: (value: string) => void; // Function to set the generated password (expects a string)
  characterLength: number;               // Number representing the desired password length
  checkBoxValues: { [key: string]: boolean }; // Object containing boolean values for checkboxes (uppercase, lowercase, numbers, symbols)
  setError: (value: boolean) => void;      // Function to set an error state (expects a boolean)
}

// GeneratePasswordButton functional component
const GeneratePasswordButton: FC<GeneratePasswordButtonProps> = ({ setPassword, characterLength, checkBoxValues, setError }) => {

  // Function to handle password generation on button click
  function getPassword() {
    // Check if any checkbox is selected
    if (!Object.values(checkBoxValues).includes(true)) {
      // Set error state to true (likely for displaying an error message)
      setError(true);
      // Clear the password state (set to empty string)
      setPassword('');
      // Exit the function early (no password generation if no checkbox is selected)
      return;
    }

    // Clear any previous error state
    setError(false);

    // Generate a new password using the provided generatePassword function
    const newPassword = generatePassword(characterLength, checkBoxValues);

    // Set the generated password in the parent component state using the setPassword function
    setPassword(newPassword);
  }

  // Return JSX to render the button (no comments within)
  return (
    <button onClick={getPassword} aria-label="Generate Password">GENERATE<IconArrowRight /></button>
  );
};

export default GeneratePasswordButton;
