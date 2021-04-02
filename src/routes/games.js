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

router.post('/', async (req, res) => {
    const {body} = req;
    const data = await Games.store(body);
    return res.json({message: 'Game Stored', data: data})
})

router.put('/:id', async (req, res) => {
    const {body, params} = req;
    const {id} = params;

    console.log(id, body);
    
    const game = await Games.update(id, body);

    return res.json({message: "game updated", data: {id, body}})

})

router.delete('/:id', async (req, res) => {
    const {params} = req;
    const {id} = params;

    const result = await Games.destroy(id);

    return res.json({mensage: "game deleted", data: result});
})

module.exports = router;