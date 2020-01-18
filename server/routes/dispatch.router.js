const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// /**
//  * GET route template, GET all orders for dispatch
//  */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "orders"
    JOIN "order_detail_junction" ON "orders"."id" = "order_detail_junction"."order_id"
    JOIN "customers" ON "customers"."id" = "order_detail_junction"."customer_id"
    JOIN "services" ON "services"."id" = "order_detail_junction"."service_id"
    WHERE "orders"."status" = 'not dispatched'
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

// /**
//  * GET route template, GET all orders by assigned tech id 
//  */
router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "orders"
    JOIN "order_detail_junction" ON "orders"."id" = "order_detail_junction"."order_id"
    JOIN "customers" ON "customers"."id" = "order_detail_junction"."customer_id"
    JOIN "services" ON "services"."id" = "order_detail_junction"."service_id"
    WHERE "order_detail_junction"."employee_id" = $1
    ORDER BY "orders"."id" ASC;`;

    pool.query(queryText, [req.params.id])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {

// });

module.exports = router;