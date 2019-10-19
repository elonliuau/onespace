import express from 'express'

const router = express.Router();

// @ts-ignore
router.get('/', (req, res) => res.send({ location: global.templocation }));

router.post('/', (req, res) => {
    // @ts-ignore
    global.templocation = req.body.location
    res.status(200).send()
});

export default router
