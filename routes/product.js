/**
 * Route: /api/product
 */

const { Router } = require('express');
const { products, productsDetail } = require('../data/demoData');
const router = Router()

router.get("/", (req,res)=>{
  res.json(products)
})
router.get("/:id", (req,res)=>{
  const product = productsDetail.find(p => p.id === req.params.id)

  if(!product){
    return res.status(404).json({msg: `No existe el producto con id: ${req.params.id}`})
  }

  res.json(product)
})

module.exports = router