const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template, GET all employees
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "employees"
    ORDER BY "employees"."id" ASC;`;

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
 * POST route template, POST new emp information
 */
router.post('/', (req, res, next) => {  
    const newEmp= req.body;
    console.log(newEmp);
    const queryText = `INSERT INTO "employees" (firstname, lastname, position) VALUES
    ('${newEmp.firstname}','${newEmp.lastname}','${newEmp.position}');`;
    pool.query(queryText)
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  });

  /**
 * DELETE route template, DELETE emp from database
 */
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "employees"
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
 * PUT route template, PUT updates emp information to database
 */
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    console.log(req.body.firstname);
    console.log(data, id);

    let queryString = `UPDATE "employees" SET firstname='${data.firstname}',lastname='${data.lastname}',
    position='${data.position}' WHERE "id" = $1;`;

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