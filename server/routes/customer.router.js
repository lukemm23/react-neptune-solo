const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template, GET customer by ID for search feature
 */
router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "customers"
                        WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id])
        .then((response) => {
            res.send(response.rows[0]);
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
    ('${newCustomer.firstname}','${newCustomer.lastname}','${newCustomer.email}','${newCustomer.phone}','${newCustomer.address}','${newCustomer.city}','${newCustomer.zipcode}','${newCustomer.notes}');`;
    pool.query(queryText)
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  });

module.exports = router;