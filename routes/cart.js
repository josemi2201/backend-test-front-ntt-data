/**
 * Route: /api/product
 */

const { Router } = require('express');
const { clearTimeouts } = require('../helpers/timeout');
const router = Router()

let counter = 0
let timeouts = []

router.post("/", (req,res)=>{
  if(counter === 99){
    resetCounter()
    res.status(500).json({error: "The max number is 99, cart was reset"})
    return
  }

  // Reset counter when passing 10 minutes
  clearTimeouts(timeouts)

  timeouts.push(setTimeout(resetCounter, 600000));

  res.json({count: ++counter})
})

const resetCounter = () => {
  counter = 0
}

module.exports = router