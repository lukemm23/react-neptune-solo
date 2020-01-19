const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template, GET all customer for search feature
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "customers"
    ORDER BY "customers"."id" ASC;`;

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

/**
 * GET route template, GET customer by ID to push to order page
 */
router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "customers"
                        WHERE "customers"."id" = $1;`;

    pool.query(queryText, [req.params.id])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

/**
 * POST route template, POST new customer information for add customer feature
 */
router.post('/', (req, res, next) => {  
    const newCustomer= req.body;
    console.log(newCustomer);
    const queryText = `INSERT INTO "customers" (firstname, lastname, email, phone, address, city, zipcode, notes) VALUES
    ('${newCustomer.firstname}','${newCustomer.lastname}','${newCustomer.email}',
    '${newCustomer.phone}','${newCustomer.address}','${newCustomer.city}','${newCustomer.zipcode}',
    '${newCustomer.notes}') RETURNING "id";`;
    pool.query(queryText)
    .then((response) => {
        console.log('right here', response.rows[0].id)
        let id = response.rows[0].id
        res.json({status:200, id})
        return('cool');
        })
      .catch(() => res.sendStatus(500));
  });

  /**
 * DELETE route template, DELETE customer from database
 */
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "customers"
                        WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

 /**
 * PUT route template, PUT updates customer information to database
 */
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    console.log(req.body.firstname);
    console.log(data, id);

    let queryString = `UPDATE "customers" SET firstname='${data.firstname}',lastname='${data.lastname}',
    email='${data.email}', phone='${data.phone}',address='${data.address}', city='${data.city}',zipcode='${data.zipcode}',
    notes='${data.notes}' WHERE "id" = $1;`;

    pool.query(queryString, [id])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

module.exports = router;