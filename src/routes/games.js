const express = require('express');
const Games = require('../models/Games');


const router = express.Router();

const DEFAULT_LIMIT = Number(process.env.DEFAULT_LIMIT);
const DEFAULT_PAGE = Number(process.env.DEFAULT_PAGE);

router.get('/', async (req, res) => {

    const {limit, page, fields, orderBy, sortBy, q} = req.query;

    const criteria = {
        limit: Number(limit) || DEFAULT_LIMIT,
        page: Number(page) || DEFAULT_PAGE,
        fields: fields || null,
        orderBy: orderBy || 'title',
        sortyBy: sortBy !== undefined ? Number(sortBy) : 1, 
        q: q || '',
    }

    const result = await Games.find(criteria);

    return res.json({mensage: 'games ok!', data: result})
})


module.exports = router;