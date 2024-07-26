import React from "react"
import './styles.css'

export default () => {
  const [data, setData] = React.useState({})
  const [num, setNum] = React.useState(1)
  const [numInput, setNumInput] = React.useState('1')
  const inputRef = React.useRef(null)

  // fetch data when number is updated
  React.useEffect(() => {
    if (num < 1 || num > 85) {
      return;
    }

    fetch(`https://swapi.dev/api/people/${num}`)
      .then(res => res.json())
      .then(data => setData(data))
      .then(x => setNumInput(num))
  }, [num])

  // debounce 500ms on the input
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (numInput.length > 0) {
        const int = parseInt(numInput)
        if (int !== NaN && int > 0 && int < 84) {
          setNum(int)
        } else if (int !== NaN) {
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

  
  return (<>
    <div class="m-3">
      <p>Star Wars Character</p>
      <button onClick={() => setNum(Math.max(num - 1, 1))}>prev</button>
      <button onClick={() => setNum(Math.min(num + 1, 83))}>next</button>
      <pre>
        {JSON.stringify(data, null, 1)}
      </pre>
      <input ref={inputRef} value={numInput} onChange={handleInput} />
    </div>
  </>);
}
