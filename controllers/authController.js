
const users = {}; // In-memory storage (replace with database in the future)

exports.registerUser = (req, res) => {
  const { email, password, name } = req.body;

  if (users[email]) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users[email] = { name, password };
  res.status(200).json({ message: 'Registration successful' });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users[email];
  if (user && user.password === password) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
};
