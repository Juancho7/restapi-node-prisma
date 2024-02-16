import { Router } from 'express'
import { prisma } from '../db.js'

const categoriesRouter = Router()

categoriesRouter.get('/', async (req, res) => {
  const categories = await prisma.category.findMany({
    include: {
      products: true
    }
  })
  res.json(categories)
})

export default categoriesRouter
