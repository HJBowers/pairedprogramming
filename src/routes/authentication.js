import express from "express"

import { findUserByEmail, signUp } from "../actions"

const router = express.Router()

router.get('/sign-up', (req, res, next) => {
  res.render('authentication/sign-up')
})

router.post('/sign-up', (req, res, next) => {
  const { name, email, password } = req.body

  findUserByEmail(email)
  .then(user => {
    console.log(user)
    if (user) {
      res.render('authentication/sign-up', {message: "User already exists"})
    } else {
      signUp( name, email, password )
      res.redirect('/')
    }
  })
})

export default router
