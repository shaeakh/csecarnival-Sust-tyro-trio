const ToDo = require('../models/ToDo');
const User = require('../models/User');

const listToDo = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ "message": "User doesn't exist" });
    }

    // Check if the ToDo list already exists for the user
    let userToDo = await ToDo.findOne({ usermail: email });

    if (!userToDo) {
      // If ToDo list doesn't exist, return a 404 response
      return res.status(404).json({ "message": "ToDo list not found for the user" });
    } else {
      // If ToDo list exists, return the JSON with a 200 status
      return res.status(200).json(userToDo);
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ "message": "Something went wrong" });
  }
}

module.exports = listToDo;
