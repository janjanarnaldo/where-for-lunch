import { Router } from 'express';

import {
  searchPlaces,
  searchPlaceDetails,
} from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  fromPlaceDetails,
} from '../lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async (req, res) => {
  const data = await searchPlaceDetails(req.params.id);
  res.send(fromPlaceDetails(data));
});

export default router;
