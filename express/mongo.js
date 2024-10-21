// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();
// app.use(express.json());
// const user = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
// });
// const uri = 'mongodb://localhost:27017';
// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log('connected successfully');
//   })
//   .catch(() => {
//     console.log('not connectes');
//   });

// const User = mongoose.model('User', userSchema);

// app.post('/users', async (req, res) => {
//   try {
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//     });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// app.listen(3003, () => {
//   console.log('hello world ');
// });

const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define Mongoose schema and model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

// Connect to MongoDB
const uri = 'mongodb://localhost:27017/bady'; // Ensure your DB name is correct
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected successfully to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// POST route to add a new user
app.post('/users', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start the Express server
app.listen(5006, () => {
  console.log('Server is running on http://localhost:3000');
});
