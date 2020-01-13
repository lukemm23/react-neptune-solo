const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template, GET all orders for dispatch
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "orders"
    ORDER BY "orders"."id" ASC;`;

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
 * POST route template, POST new order for add order feature
 */
router.post('/', (req, res, next) => {  
    const newOrder= req.body;
    console.log(newOrder);
    const queryText = `INSERT INTO "orders" (estimate_time,service,service_frequency,service_due,tax_due,total_due,status) VALUES
    ('${newOrder.estimate_time}','${newOrder.service}','${newOrder.service_frequency}','${newOrder.service_due}','${newOrder.tax_due}','${newOrder.total_due}','${newOrder.status}');`;
    pool.query(queryText)
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  });

module.exports = router;

