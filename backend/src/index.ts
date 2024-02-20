import express from 'express'
import userRouter from './routes/routes'

const app = express()
app.use('/api/user',userRouter )

app.listen(8080, () => {
  console.log('server listening to port 8080')
})