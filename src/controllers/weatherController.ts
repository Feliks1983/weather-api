import { Request, Response } from 'express';
import axios from 'axios';
import { getCurrentWeather } from '../services/weather.service';

export async function getCurrentWeatherHandler(req: Request, res: Response) {
  const city = String(req.query.city || '').trim();
  console.log(city);

  if (!city) {
    return res.status(400).json({
      message: 'City query parameter is required',
    });
  }

  try {
    const weather = await getCurrentWeather(city);

    return res.status(200).json(weather);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return res.status(404).json({
          message: 'City not found',
        });
      }

      return res.status(500).json({
        message: 'Failed to fetch weather data',
      });
    }

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}


