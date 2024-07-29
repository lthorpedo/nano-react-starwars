import React from "react"
import './styles.css'
import CharacterComponent from "./character/character"

export default () => {
  const [num, setNum] = React.useState(1)
  const [numInput, setNumInput] = React.useState('1')
  const inputRef = React.useRef(null)

  // debounce 500ms on the input
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (numInput.length > 0) {
        const int = parseInt(numInput)
        if (int > 0 && int < 84) {
          setNum(int)
        } else {
          alert('Must search for a character between 1 & 83')
          inputRef.current.focus()
        }
      }
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [numInput, 500])

  const handleInput = (e) => {
    setNumInput(e.target.value)
  }

  const handlePrev = () => {
    setNum(Math.max(num - 1, 1))
    setNumInput(num - 1)
  }

  const handleNext = () => {
    setNum(Math.min(num + 1, 83))
    setNumInput(num + 1)
  }
  
  return (<>
    <div className="m-3">
      <p>Star Wars Character</p>
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
      <div>
        <input ref={inputRef} value={numInput} onChange={handleInput} />
      </div>
      <CharacterComponent num={num} />
    </div>
  </>);
}
