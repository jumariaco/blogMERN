import { Router } from 'express'

const API = Router()
.get('/hello', (_req, res) =>{
    res.status(401).send('Vous ne passerez pas!')
})
.get('/welcome', (_req, res) =>{
    res.status(200).send('welcome you!')
})
.get('/goodbye', (_req, res) =>{
    res.status(401).send('ouh bye bye')
})

export default api