// import necessary react hooks and styled components 
import { FC , useState, useEffect, useRef } from 'react'
import { CharacterLengthStyled, StyledInput, StyledLabel } from '../styles/CharacterLength.styled'

// Define minimum and maximum allowed chracter length
const MIN_LENGTH = 6 
const MAX_LENGTH = 25

//interface for  character container props 

interface CharacterLengthContainerProps {
    characterLength: number // the current character lenght value
    setCharacterLength: (value: number) => void // function to update character length
}

// character length container functional components 
const CharacterLengthContainer: FC<CharacterLengthContainerProps> = ({ characterLength, setCharacterLength }) => {
    //useRef hook to store a reference to the slider input element 
    const sliderRef = useRef<HTMLInputElement>(null)
     // useState hook to store the calculated slider percentage (visual representation)
    const [sliderPercentage, setSliderPercentage] = useState<number>(0)

    // Function to update the slider style based on current character length
    function updateSliderStyle() {
        if (sliderRef.current) { //check if the slider element exist 
            const Percentage = (Number(sliderRef.current.value)) - Number(sliderRef.current.min) / (Number(sliderRef.current.max) - Number(sliderRef.current.min)) * 100 // Calculate percentage based on current value, min, and max 
            setSliderPercentage(Percentage) // Update the state with the calculated percentage
        }
    }
    // useEffect hook to update slider style whenever characterLength changes
    useEffect(()=> {
        updateSliderStyle()
    }, [characterLength]) // Dependency array: Only run updateSliderStyle when characterLength changes

    // JSX for rendering the CharacterLengthContainer component
    return(
        <CharacterLengthStyled>
            <StyledLabel>
                <label>CharacterLength</label>
                <p>{characterLength}</p>
            </StyledLabel>
            <StyledInput
                type = "range"
                min={MIN_LENGTH}
                max={MAX_LENGTH}
                value={characterLength}
                onChange={(e) => setCharacterLength(Number(e.target.value))}
                ref={sliderRef}
                style={{ '--thumb percentage': `${sliderPercentage}%`} as React.CSSProperties}
            />
        </CharacterLengthStyled>
    )
}

export default CharacterLengthContainer