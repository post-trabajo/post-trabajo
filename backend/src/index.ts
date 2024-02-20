import express from 'express'
import UserRouter from './routes/routes'

const app = express()
app.use('/api/user',UserRouter )

app.listen(8080, () => {
  console.log('server listening to port 8080')
})