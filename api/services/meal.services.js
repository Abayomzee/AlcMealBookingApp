import dummy from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealServices = {
    fetchAllMeals(){
      const allMeals = dummy.meals.map( (meals) => {
            const newMeal = new Meal();
            newMeal.id = meals.id;
            newMeal.name = meals.name;
            newMeal.price = meals.price;
            newMeal.size = meals.size;

            return newMeal;
        });

        return allMeals;
    },

    addMeal(meal){
        const mealLength = dummy.meals.length;
        const lastId = dummy.meals[mealLength - 1].id;
        const newId = lastId + 1;

        meal.id = newId;
        dummy.meals.push(meal);
        return meal;
    },

    getMeal(id){
        const meal = dummy.meals.find((meal) => meal.id == id);
        return meal || {};
    },

    deleteMeal(id){
        const meal = dummy.meals.find((meal) => meal.id == id);
        const mealIndex = dummy.meals.indexOf(meal);
        const removeMeal = dummy.meals.splice(mealIndex, 1);
        // console.log(removeMeal);
        // console.log(mealIndex);

        return removeMeal || {};
    },

    updateMeal(meal, id){

        // get the meal id and index
        const mealId = dummy.meals.find((Ameal) => Ameal.id == id);
        const getMealIndex = dummy.meals.indexOf(mealId);
        
        mealId.id = id;

        if(meal.name == null){
            mealId.name = mealId.name;
        } else {
            mealId.name = meal.name;
        }

        if(meal.size == null){
            mealId.size = mealId.size;
        } else {
            mealId.size = meal.size;
        }

        if(meal.price == null){
            mealId.price = mealId.price;
        } else {
            mealId.price = meal.price;
        }

        dummy.meals.splice(getMealIndex, 1, mealId);

        return mealId;
    }
}

export default MealServices;