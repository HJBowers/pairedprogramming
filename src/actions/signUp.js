import db from '../db'

export default function signUp(name, email, password) {
  return db.oneOrNone('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password])
}
