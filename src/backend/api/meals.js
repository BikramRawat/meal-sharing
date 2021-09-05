const { request, response, query } = require("express");
const express = require("express");
const { AsyncDependenciesBlock } = require("webpack");
const { where } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  // Get meals that has a price smaller than maxPrice
  const queryParam = request.query;
  try{
    if (queryParam.maxPrice) {
    const cheapMeals = await knex("meals")
    .where("price", "<", queryParam.maxPrice);
    response.json(cheapMeals);
  } 
  // get the titles of the meal
  else if (queryParam.title) {
    const mealsLikeTitle = await knex("meals")
    .where('title', 'like', `%${queryParam.title}%`);
    response.json(mealsLikeTitle);
  } 
  // get meals created after date given
  else if (queryParam.createdAfter) {
    const mealsCreatedAfter = await knex("meals")
    .where('created_date', '>', queryParam.createdAfter);
    response.json(mealsCreatedAfter);
  } 
  // limit the meals to be displayed
  else if (queryParam.limit) {
    const limitMeals = await knex("meals")
      .select()
      .limit(queryParam.limit);
       response.json(limitMeals);
  }
  // limit with maxPrice and the no of meals
  else if (queryParam.limit && queryParam.maxPrice) {
    const selectedMeals = await knex("meals")
    .select()
      .where("price", "<", queryParam.maxPrice)
      .limit(queryParam.limit);
    response.json(selectedMeals);
  } 
  // get the meals with available reservations 
  else if (queryParam.availableReservations) {
        const mealsWithAvailableReservations = await getMealsWithAvailableReservations();
        response.json(mealsWithAvailableReservations);
  } 
  // else get all the meals
  else {
    const meals = await knex("meals");
    response.json(meals);
  }
}catch (error) {
    throw error;
  }
  });
  
  async function getMealsWithAvailableReservations() {
    const foundMeal = await knex("meals")
      .select('meals.id')
      .from('meals')
      .sum({ total_reservations: 'reservations.no_of_guests' })
      .join('reservations', { 'meals.id': 'reservations.meal_id' })
      .groupBy('meals.id')
      .having('total_reservations', '<', 'meals.max_reservations');
      const allMeals = await knex("meals");
    return allMeals.filter(meal1 => foundMeal.some(meal2 => meal2.id === meal1.id));
  }

// http://localhost:5000/api/meals
router.get("/", async (request, response) => {
  try {
    const meals = await knex("meals");
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

// http://localhost:5000/api/meals/titles
router.get("/titles", async (request, response) => {
  try {
    const titles = await knex("meals").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//http://localhost:5000/api/meals/4
router.get('/:id', async (request, response) => {
  try{
    const singleMeal = await knex('meals')
    .select()
    .where('id', Number(request.params.id));

    response.json(singleMeal);
  } catch (error) {
    throw error;
  }
});

// insert new meal into the meals table and post using the postman app
// router.post('/', async (request, response) => {
//   const newMeal = await knex('meals').insert(
//     {

//       "title": 'Crunchy Breakfast',
//       "description": 'with salads and vegetables',
//       "location": 'Vallensbæk',
//       "when": '2021-10-10',
//       "max_reservations": 7,
//       "price": 350,
//       "created_date":'2021-08-09 20:24:15'
//     }
//  )
//     response.json(newMeal);
// });

// adding a new meal using postman app : using request.body
router.post("/", async (request, response) => {
  try {
    await knex("meals").insert(request.body);
    response.json('New meal is added');
  } catch (error) {
    throw error;
  }
});

// update meal data 
router.put('/:id', async (request,response) => {
  try {
    await knex('meals')
    .update(request.body)
    .where('id', Number(request.params.id))

    response.send('Meal is updated with the given keys and values');
  } catch (error) {
    throw error;
  }
});

// delete a meal
router.delete('/:id', async (request,response) => {
  try {
    await knex('meals')
    .delete()
    .where('id', Number(request.params.id))

    response.send('Meal deleted with given key');
  } catch (error) {
    response.status(400).send('Invalid request' + error)
  }
});

module.exports = router;