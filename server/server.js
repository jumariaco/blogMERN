import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import api from './router/api.js'

const app = express()
app
.use(helmet())
.use(helmet.contentSecurityPolicy(

))
.use(helmet.hidePoweredBy())
.use(express.urlencoded({extended: true}))
.use(morgan(':remote-addr - : method :url :status :res[content-length] - :response-time ms'))
.use('/api', api)
.get('/api/hello', (req, res,next) => {
    res.status(401).send('Vous ne passerez pas !')
})
.listen(3000, () => {
    console.log("server listen on port 3000")
})
.on('error', (err) => {
    console.error(err)
    app.listen(3000, () => {
        console.log("server restart on port 3000")
    })
})