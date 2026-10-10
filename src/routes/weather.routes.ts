import { Router } from 'express';
import { getCurrentWeatherHandler } from '../controllers/weatherController';


export const router = Router();

router.get('/current', getCurrentWeatherHandler);

