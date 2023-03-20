import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function WeatherCard() {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        const apiUrl = 'https://api.tomorrow.io/v4/timelines'
        const params = {
            location: '40.703949,-105.006310',
            fields: 'temperature',
            units: 'imperial',
        }
        const config = {
            params,
            headers: {
                'apikey': process.env.REACT_APP_TOMORROW_IO_API_KEY
            },
        };
        axios.get(apiUrl, config)
            .then(response => {
                setWeatherData(response.data.data.timelines[0].intervals[0].values)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <>
            <Card border="light" bg="dark" fluid style={{ width: '20rem' }}>
                <Card.Text>
                    {weatherData && (
                        <h1>The Weather in Wellington, CO: {weatherData.temperature} Degrees </h1>
                    )}
                </Card.Text>
            </Card>
        </>
    )
}