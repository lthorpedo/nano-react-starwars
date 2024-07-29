import React from "react"
import PlanetComponent from "../planet/planet";

export default function CharacterComponent({ num }) {
  const [data, setData] = React.useState({})
  const [planet, setPlanet] = React.useState('')

  // fetch data when number is updated
  React.useEffect(() => {
    if (num < 1 || num > 85) {
      return;
    }

    fetch(`https://swapi.dev/api/people/${num}`)
      .then(res => res.json())
      .then(data => {
        setData(data)

        if (data.homeworld != null && data.homeworld.length > 0) {
            setPlanet(data.homeworld)
        }
      })
  }, [num])

  return (<>
    <h1>Character</h1>
    <pre>
        {JSON.stringify(data, null, 1)}
    </pre>
    {planet !== '' ? <PlanetComponent planetUrl={planet} /> : ''}
    </>)
}