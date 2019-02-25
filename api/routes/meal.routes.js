
import { Router } from 'express';

import MealsController from '../controllers/meal.controller';
import MenuController from './../controllers/menu.controller';

const router = Router();

router.get('/', MealsController.fetchAllMeals);
router.post('/', MealsController.AddMeals);
router.get('/:id', MealsController.getSingleMeal);
router.delete('/:id', MealsController.deleteAMeal);
router.put('/:id', MealsController.updateMeal);

export default router;