const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/checkLaptop', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'check laptop successfully',
        meatadata: [
            {
                name: "lenovo",
                price: 15000
            },
            {
                name: "dell",
                price: 25000
            },
            {
                name: "sony",
                price: 35000
            }
        ]
    })
})

module.exports = router;