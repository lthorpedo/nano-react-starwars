import React from "react"
import city from '../images/city.jpg';
import desert from '../images/desert.jpg';
import mountain from '../images/mountain.jpg';
import jungle from '../images/jungle.jpg';
import tundra from '../images/tundra.jpg';
import ocean from '../images/ocean.jpg';

export default function PlanetComponent({ planetUrl }) {
  const [data, setData] = React.useState({ terrain: '' })

  React.useEffect(() => {
    fetch(`${planetUrl}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [planetUrl])

  return (<>
    <h1>Planet</h1>
    {data.terrain === 'cityscape' ? <img src={city} /> : ''}
    {data.terrain === 'desert' ? <img src={desert} /> : ''}
    {data.terrain.includes('mountain') ? <img src={mountain} /> : ''}
    {data.terrain.includes('jungle') ? <img src={jungle} /> : ''}
    {data.terrain.includes('tundra') ? <img src={tundra} /> : ''}
    {data.terrain.includes('ocean') ? <img src={ocean} /> : ''}
  </>)
}