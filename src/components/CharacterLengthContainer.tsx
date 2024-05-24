import { FC , useState, useEffect, useRef } from 'react'
import { CharacterLengthStyled, StyledLabel } from '../styles/CharacterLength.styled'

const MIN_LENGTH = 6
const MAX_LENGTH = 25

interface CharacterLengthContainerProps {
    characterLength: number 
    setCharacterLength: (value: number) => void
}


const CharacterLengthContainer: FC<CharacterLengthContainerProps> = ({ characterLength, setCharacterLength }) => {
    const sliderRef = useRef<HTMLInputElement>(null)
    const [sliderPercentage, setSliderPercentage] = useState<number>(0)

    function updateSliderStyle() {
        if (sliderRef.current) {
            const Percentage = (Number(sliderRef.current.value)) - Number(sliderRef.current.min) / (Number(sliderRef.current.max) - Number(sliderRef.current.min)) * 100
            setSliderPercentage(Percentage)
        }
    }

    useEffect(()=> {
        updateSliderStyle()
    }, [characterLength])


    return(
        <CharacterLengthStyled>
            <StyledLabel>
                <label>CharacterLength</label>
                <p>{characterLength}</p>
            </StyledLabel>
            <input
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