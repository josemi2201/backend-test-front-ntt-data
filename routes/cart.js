/**
 * Route: /api/product
 */

const { Router } = require('express');
const router = Router()

let counter = 0

router.post("/", (req,res)=>{
  counter = counter === 5 ? 1 : ++counter
  res.json({count: counter})
})


module.exports = router