const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/images',(req, res) => {
    const sql = `SELECT * FROM Gallery`

    connection.query(sql, (error, results) => {
        if (error) {throw error}
        else{ res.status(200).json( results ) }
    })
})

router.post('/add/image', (req, res) => {
    const sql = `INSERT INTO Gallery SET ?`

    connection.query(sql,{image: req.body.image}, (error) => {
        if (error) {throw error}
        else{ res.status(200).json('image posted!') }
    })
})

module.exports = router;