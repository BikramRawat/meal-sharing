const { request, response, query } = require("express");
const express = require("express");
const { AsyncDependenciesBlock } = require("webpack");
const { where } = require("../database");
const router = express.Router();
const knex = require("../database");

// http://localhost:5000/api/reviews
router.get("/", async (request, response) => {
  try {
    const reviews = await knex("reviews");
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

//http://localhost:5000/api/reviews/1
router.get('/:id', async (request, response) => {
  try{
    const review = await knex('reviews')
    .select()
    .where('id', Number(request.params.id));

    response.json(review);
  } catch (error) {
    throw error;
  }
});

// adding a new review using postman app : request.body
router.post("/", async (request, response) => {
  try {
    const newReview = await knex("reviews").insert(
      {
        title: request.body.title,
        description: request.body.description,
        meal_id: request.body.meal_id,
        stars: request.body.stars,
        created_date: new Date(),
      }
    );
    response.json(newReview);
  } catch (error) {
    throw error;
  }
});

// update review data 
router.put('/:id', async (request,response) => {
  try {
    await knex('reviews')
    .update(request.body)
    .where('id', Number(request.params.id))

    response.send('Review is updated with the given keys and values');
  } catch (error) {
    throw error;
  }
});

// delete a review
router.delete('/:id', async (request,response) => {
  try {
    await knex('reviews')
    .delete()
    .where('id', Number(request.params.id))

    response.send('A review deleted with given key');
  } catch (error) {
    response.status(400).send('Invalid request' + error)
  }
});

module.exports = router;
