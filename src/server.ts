import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'NBA API 1.0' })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

