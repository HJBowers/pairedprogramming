import express from 'express'

import albums from './albums'
import auth from './authentication'

const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/albums', albums)
routes.use('/', auth)

export default routes
