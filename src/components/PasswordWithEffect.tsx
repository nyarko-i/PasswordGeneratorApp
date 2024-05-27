// Import necessary React components
import { FC, useState, useEffect, useRef } from 'react';

// Interface for PasswordWithEffect component props
interface PasswordWithEffectProps {
  password: string; // The password string to be displayed with the effect
}

// PasswordWithEffect functional component
const PasswordWithEffect: FC<PasswordWithEffectProps> = ({ password }) => {

  // State variable to hold the characters for the animated display
  const [chars, setChars] = useState<string[]>(password.split(''));

  // useRef hook to store the interval ID for animation
  const intervalRef = useRef<number | null>(null);

  // useEffect hook to manage the animation 
  useEffect(() => {
    // Define the set of characters allowed in the animation
    const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '!@#$%^&*()_+'

    // Variable to track the number of iterations (controls animation progress)
    let iterations = 0;

    // Interval time in milliseconds (adjusts the animation speed)
    const intervalTime = 20;

    // Clear any existing interval before starting a new one
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    // Update the `chars` state with the latest password characters
    setChars(password.split(''));

    // Start the animation interval
    intervalRef.current = window.setInterval(() => {
      // Update `chars` state to create the animation effect
      setChars((oldChars) =>
        oldChars.map((_, index) => {
          // Replace characters gradually based on iterations
          if (index < iterations) {
            return password[index]; // Show the actual password character
          } else {
            return availableCharacters[Math.floor(Math.random() * availableCharacters.length)]; // Show random characters for animation
          }
        })
      );

      // Stop the interval if all characters are revealed
      if (iterations >= password.length) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      }

      // Increment iterations to control animation progress
      iterations += 1 / 3; // Adjust the increment for desired animation speed
    }, intervalTime);

    // Cleanup function to clear the interval on unmount or password change
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [password]); // The effect runs only when `password` changes

  // Render the password with the animated characters
  return (
    <p>{chars.join("")}</p>
  );
};

export default PasswordWithEffect;
