const toDos = require('../db/to-dos');
const express = require('express');
const router = express.Router();

//////////////////////////////////////////////////////////////////
// Index
//////////////////////////////////////////////////////////////////

router.get('/', (req, res) => {
    res.json(toDos);
});

module.exports = router;
