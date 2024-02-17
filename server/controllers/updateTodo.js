const User = require('../models/User');
const ToDo = require('../models/ToDo');

const updateToDo = async(req,res)=>{
    const { email, list } = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ "message": "User doesn't exist" });
    }

    // Check if the ToDo list already exists for the user
    let userToDo = await ToDo.findOne({ usermail: email });

    if (!userToDo) {
      // If ToDo list doesn't exist, create a new one
      userToDo = new ToDo({ usermail: email, list });
      await userToDo.save();
    } else {
      // If ToDo list exists, update the existing one
      userToDo.list = list;
      await userToDo.save();
    }

    res.status(200).json({ "message": "ToDo list updated successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ "message": "Something went wrong" });
  }
}

module.exports = updateToDo;