const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template, GET all orders for dispatch
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "orders"
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

/**
 * GET route template, GET order by id
 */
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const queryText = `SELECT * FROM "orders"
    WHERE "orders"."id" = $1;`;

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
 * POST route template, POST adding a order with ID only ready for input
 */
router.post('/onlyID', (req, res, next) => {
    const newOrder = req.body;
    console.log(newOrder);
    const queryTextInsertOrder = `INSERT INTO "orders" ("estimate_time")
    VALUES ('') RETURNING "id";`;

    pool.query(queryTextInsertOrder)
    
        .then((response) => {
            console.log('right here', response.rows[0].id)
            let id = response.rows[0].id
            res.json({status:200, id})
            return('cool');
            })
            .catch(() => res.sendStatus(500))
});
/**
 * POST route template, POST new order to order_detail_junction
 */
router.post('/', (req, res, next) => {
    const newOrder = req.body;
    console.log(newOrder);
    const queryTextInsertOrder = `INSERT INTO "order_detail_junction" ("order_id", "service_id", "customer_id")
    VALUES ('${newOrder.id}', '${newOrder.service}', '${newOrder.customer_id}');`;

    pool.query(queryTextInsertOrder)

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
    service_frequency='${data.service_frequency}', service_due='${data.service_due}', 
    tax_due='${data.tax_due}', total_due='${data.total_due}',status='not dispatched',
    date= '${data.date}', notes= '${data.notes}'
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

