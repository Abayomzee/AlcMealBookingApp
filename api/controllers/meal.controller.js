import MealServices from './../services/meal.services';

const MealController = {
    fetchAllMeals(req, res){
        const allMeals = MealServices.fetchAllMeals();
        return res.json({
            status: 'Success',
            data: allMeals
        }).status(200);
    },

    AddMeals(req, res){
        const newMeal = req.body;
        const createdMeal = MealServices.addMeal(newMeal);

        return res.json({
            status: 'Success',
            data: createdMeal
        }).status(200);
    },

    getSingleMeal(req, res){
        const mealId = req.params.id;
        const getMeal = MealServices.getMeal(mealId);
        return res.json({
            status: 'Success',
            data: getMeal
        }).status(201);        
    },

    deleteAMeal(req, res){
        const mealId = req.params.id;
        const removeMeal = MealServices.deleteMeal(mealId);
        return res.json({
            status: 'Success',
            data: removeMeal
        }).status(201);
    },

    updateMeal(req, res){
        const mealBody = req.body;
        const mealId = req.params.id;
        const editMeal = MealServices.updateMeal(mealBody, mealId);
        return res.json({
            status: 'Success',
            data: editMeal
        }).status(201);
    }
};

export default MealController;
