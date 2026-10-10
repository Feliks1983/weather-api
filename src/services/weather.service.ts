import axios from 'axios';
import 'dotenv/config';
import process from 'process';
import { CurrentWeatherResponse, WeatherApiResponse } from '../types/weather.types';

export async function getCurrentWeather(city: string): Promise<CurrentWeatherResponse> {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error('WEATHER_API_KEY is not configured');
  }

  const response = await axios.get<WeatherApiResponse>(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric'
      },
      timeout: 5000
    }
  );

  return {
    city: response.data.name,
    country: response.data.sys.country,
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity
  };
}
