import {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0.3em 1em;
`

const Weather = () => {

    const [temp, setTemp] = useState('')

    useEffect(() => {
        axios
          .get(
            `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&timezone=America%2FNew_York`
          )
          .then(response => {
          console.log(response);
          setTemp(response.data.current_weather.temperature)})
          .catch((error) => console.error(error));
          
    },[])
  return (
    <Wrapper>
      <img
        src="https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png"
        alt="weather"
      />
      <h4>{temp}°C</h4>
    </Wrapper>
  );}

export default Weather