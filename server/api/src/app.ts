import express from 'express'
import LocationRoute from './location/LocationRoute'
import SceneRoute from './scene/SceneRoute'

var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/location', LocationRoute)
app.use('/scene', SceneRoute)

export default app
