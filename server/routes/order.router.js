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

   /**
 * DELETE route template, DELETE order from database
 */
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "orders"
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
 * PUT route template, PUT updates order information into database
 */
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    console.log(req.body.service);
    console.log(id);

    let queryString = `UPDATE "orders" SET estimate_time='${data.estimate_time}',service='${data.service}',
    service_frequency='${data.service_frequency}', service_due='${data.service_due}',tax_due='${data.tax_due}', total_due='${data.total_due}',status='${data.status}'
    WHERE "id" = $1;`;

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

