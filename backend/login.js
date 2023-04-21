module.exports = function login (req, res) {
  const { email, password } = req.body

  if (
    // email === 'optimus.prime@autobots.com' &&
    // password === 'validPassword1234!'
    email === 'optimus.prime@autobots.com' &&
    password === 'validPassword1'
  ) {
    return res.send({message: 'Login successful.', token: 'xyz0987654321' })
    
  }

  return res.status(401).send({message: 'Wrong email or password.'})
  
}
