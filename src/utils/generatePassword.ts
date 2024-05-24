// Function to generate Password 

function generatePassword(length: number, checkBoxValues: { [key: string]: boolean }) {
    // destructure the check box values  for easier acess within the function
    const { uppercase, lowercase, numbers, symbols } = checkBoxValues

    //Define character set for each function 
    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const numbersCharacters = '0123456789'
    const symbolsCharacters = '!@#$%^&*()_+-='


    // Build the available characters string based on selected options
    let availableCharacters = ''
    availableCharacters += uppercase ?  uppercaseCharacters : '' // Add uppercase if selected 
    availableCharacters += lowercase ? lowercaseCharacters : '' // Add lowercase if checkbox is checked 
    availableCharacters += numbers ? numbersCharacters : '' // Add numbers if checkbox is checked  
    availableCharacters += symbols ? symbolsCharacters : '' // Add symbols if checkbox is checked 

    let password = ''
    //Loop to generate password with the specified length
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length)
        password += availableCharacters[randomIndex] // pick a random character from the available characters and add it to the password 
    }

    // return the generated password 
    return password


}

export default generatePassword
