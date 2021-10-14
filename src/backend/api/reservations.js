const { request, response, query } = require("express");
const express = require("express");
const { AsyncDependenciesBlock } = require("webpack");
const { where } = require("../database");
const router = express.Router();
const knex = require("../database");

// http://localhost:5000/api/reservations
router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservations");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

//http://localhost:5000/api/reservations/2
router.get('/:id', async (request, response) => {
  try{
    const reservation = await knex('reservations')
    .select()
    .where('id', Number(request.params.id));

    response.json(reservation);
  } catch (error) {
    throw error;
  }
});

// adding a new reservation using postman app : request.body
router.post("/", async (request, response) => {
  try {
    const newReservation=     await knex("reservations").insert(
      {
        meal_id : request.body.meal_id,
        no_of_guests: request.body.numberOfGuests,
        phone_number: request.body.phoneNumber,
        contact_name: request.body.contactName,
        contact_email_id: request.body.email,
        created_date: new Date(),
      }
        );
    response.json(newReservation);
  } catch (error) {
    throw error;
  }
});

// update reservations data 
router.put('/:id', async (request,response) => {
  try {
    await knex('reservations')
    .update(request.body)
    .where('id', Number(request.params.id))

    response.send('Reservation is updated with the given keys and values');
  } catch (error) {
    throw error;
  }
});

// delete a reservation
router.delete('/:id', async (request,response) => {
  try {
    await knex('reservations')
    .delete()
    .where('id', Number(request.params.id))

    response.send('A reservation deleted with given key');
  } catch (error) {
    response.status(400).send('Invalid request' + error)
  }
});

module.exports = router;