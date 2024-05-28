// Import necessary React components
import { FC, useMemo } from "react";
import { StrengthIndicatorStyled, Strength, Bar, BarsContainer } from "../styles/StrengthIndicator.styled";

// Define thresholds for password strength levels
const TOO_WEAK_THRESHOLD = 17; // Minimum score for "TOO WEAK"
const WEAK_THRESHOLD = 25;     // Minimum score for "WEAK"
const MEDIUM_THRESHOLD = 40;    // Minimum score for "MEDIUM"

// Interface for StrengthIndicator component props
interface StrengthIndicatorProps {
  checkBoxValues: { [key: string]: boolean }; // Object containing checkbox values (uppercase, lowercase, numbers, symbols)
  length: number;                            // Length of the password
}

// StrengthIndicator functional component
const StrengthIndicator: FC<StrengthIndicatorProps> = ({ checkBoxValues, length }) => {

  // Destructure checkbox values for easier access
  const { uppercase, lowercase, numbers, symbols } = checkBoxValues;

  // Calculate password strength level using useMemo for efficiency
  const strengthLevel = useMemo(() => {
    // Check if no checkbox is selected (very weak password)
    if (!uppercase && !lowercase && !numbers && !symbols) return null;

    let rating = 0; // Initialize rating score

    // Add points for password length
    rating += length;

    // Add points for each character type selected (if checked)
    rating += uppercase ? 5 : 0;
    rating += lowercase ? 5 : 0;
    rating += numbers ? 5 : 0;
    rating += symbols ? 5 : 0;

    // Determine strength level based on rating score
    if (rating < TOO_WEAK_THRESHOLD) {
      return "TOO WEAK!";
    } else if (rating < WEAK_THRESHOLD) {
      return "WEAK";
    } else if (rating < MEDIUM_THRESHOLD) {
      return "MEDIUM";
    } else {
      return "STRONG";
    }
  }, [uppercase, lowercase, numbers, symbols, length]); // Update strengthLevel only when relevant props change

  // JSX for rendering the StrengthIndicator component (no comments within)
  return (
    <StrengthIndicatorStyled>
      <span>STRENGTH</span>
      <Strength>
        {!strengthLevel ? "" : (
          <>
            <p>{strengthLevel}</p>
            <BarsContainer strengthLevel={strengthLevel}>
              <Bar />
              <Bar />
              <Bar />
              <Bar />
            </BarsContainer>
          </>
        )}
      </Strength>
    </StrengthIndicatorStyled>
  );
};

export default StrengthIndicator;
