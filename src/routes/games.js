const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({mensage: 'games ok!'})
})


module.exports = router;