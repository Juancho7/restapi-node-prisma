import express from 'express'
import productsRouter from './routes/products.routes.js'
import categoriesRouter from './routes/categories.routes.js'

const app = express()

app.use(express.json())

app.use('/api/products', productsRouter)
app.use('/api/categories', categoriesRouter)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
