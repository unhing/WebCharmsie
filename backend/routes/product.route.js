import express from "express";

const router = express.Router();

router.get('/a', function (req, res) {
    res.send('Hj')
})

export default router;

// model view controller