import { FC, useState, useEffect } from 'react';
import PasswordWithEffect from './PasswordWithEffect'; 
import SvgIconCopy from '../assets/SvgIconCopy'; 
import { PasswordContainerStyled, PlaceHolderStyled, ErrorStyled, ClipboardStyled, CopiedStyled, ButtonStyled } from '../styles/PasswordContainer.styled'; // Styled components for UI elements

// Interface for PasswordContainer component props
interface PasswordContainerProps {
  password: string; // The generated password to be displayed
  error: boolean;   // Flag indicating an error state (e.g., no checkbox selected)
}

// PasswordContainer functional component
const PasswordContainer: FC<PasswordContainerProps> = ({ password, error }) => {

  // State variable to track copied state (whether the password has been copied)
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // useEffect hook to manage the 'COPIED' message display
  useEffect(() => {
    let timeoutId: number | undefined; // Variable to hold the timeout ID

    // If the password is copied (isCopied is true)
    if (isCopied) {
      // Set a timeout to clear the 'COPIED' message after 3 seconds
      timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear the timeout if it exists
      }
    };
  }, [isCopied]); // The effect runs only when `isCopied` changes

  // Function to copy the password to clipboard
  function copyToClipboard(): void {
    if (!password) return; // Do nothing if there's no password

    // Use navigator.clipboard.writeText to copy the password to clipboard
    navigator.clipboard.writeText(password)
      .then(() => setIsCopied(true)) // Set copied state to true on success
      .catch(err => console.error(err)); // Log any errors to the console
  }

  // JSX rendering logic
  return (
    <>
      <PasswordContainerStyled>
        {/* Conditionally render password or error/placeholder based on password and error state */}
        {password ? (  // If there's a password
          <PasswordWithEffect password={password} /> // Render PasswordWithEffect component
        ) : (
          error ? (  // If there's an error
            <ErrorStyled>Please select at least one option</ErrorStyled>
          ) : (  // If there's no password and no error (initial state)
            <PlaceHolderStyled>P4$5W0rD!</PlaceHolderStyled>  // Render placeholder password
          )
        )}

        
        <ClipboardStyled>
          {isCopied && <CopiedStyled>COPIED</CopiedStyled>}  
          <ButtonStyled onClick={copyToClipboard} aria-label='Copy to clipboard'>
            <SvgIconCopy /> 
          </ButtonStyled>
        </ClipboardStyled>
      </PasswordContainerStyled>
    </>
  );
};

export default PasswordContainer;
