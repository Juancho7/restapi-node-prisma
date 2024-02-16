import { Router } from 'express'
import { prisma } from '../db.js'

const productsRouter = Router()

productsRouter.get('/', async (req, res) => {
  const products = await prisma.product.findMany()
  res.json(products)
})

productsRouter.get('/:id', async (req, res) => {
  const productFound = await prisma.product.findFirst({
    where: {
      id: parseInt(req.params.id)
    },
    include: {
      category: true
    }
  })

  if (!productFound) return res.status(404).json({ message: 'Product not found' })

  return res.json(productFound)
})

productsRouter.post('/', async (req, res) => {
  const product = await prisma.product.create({
    data: req.body
  })
  res.json(product)
})

productsRouter.put('/:id', async (req, res) => {
  const productUpdated = await prisma.product.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: req.body
  })

  if (!productUpdated) return res.status(404).json({ message: 'Product not found' })

  return res.json(productUpdated)
})

productsRouter.delete('/:id', async (req, res) => {
  const productDeleted = await prisma.product.delete({
    where: {
      id: parseInt(req.params.id)
    }
  })

  if (!productDeleted) return res.status(404).json({ message: 'Product not found' })

  return res.json(productDeleted)
})

export default productsRouter
