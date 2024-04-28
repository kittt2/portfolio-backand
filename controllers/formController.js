import data from "../models/data.js";
import usermodel from "../models/usermodel.js";
export const formdata = async (req, res) => {
    try {
        const { name, email, text } = req.body;
        if (!name) {
            return res.status(400).send({ message: "Name is required" });
        }
        if (!email) {
            return res.status(400).send({ message: "Email is required" });
        }
        if (!text) {
            return res.status(400).send({ message: "Text is required" });
        }

        const user = await new data({
            name,
            email,
            text
        }).save();

        res.status(200).send({
            success: true,
            message: "Your response is submitted",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error
        });
    }
};


export const getallcomment = async (req, res) => {
    try {
      const users = await data.find({})
        .populate("name")
        .sort({ createdAt: -1 });
  
      const formattedUsers = users.map(user => ({
        _id: user._id,
        name: user.name,
        email: user.email,
        text: user.text,
      }));
  
      res.status(200).send({
        success: true,
        message: "comments loaded successfully",
        users: formattedUsers,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in loading ",
        error,
      });
    }
  };
  

  export const admin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      
      const user = await data.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
     
      });
      
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };

  
 export const register = async (req, res) => {
    try {
      const { name, email, password} = req.body;
      if (!name) {
        return res.send({ message: "Name is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      if (!password) {
        return res.send({ message: "Password is Required" });
      }
     
      const exisitingUser = await usermodel.findOne({ email });
      if (exisitingUser) {
        return res.status(200).send({
          success: true,
          message: "Already Register please login",
        });
      }
      const user = await new usermodel({
        name,
        email,
        password,
        
      }).save();
  
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Errro in Registeration",
        error,
      });
    }
  };
  