
import User from "../model/userModel.js";

export const create = async (req, res) => {
   try {
    const userData = new User(req.body)
    if (!userData) {
        return res.status(404).json({msg:"User Data is not found"})
    }
    const saveData= await userData.save()
    res.status(200).json({msg:"User created successfully"})
    // res.status(200).json(saveData)
   } catch (error) {
    res.status(500).json({error: error})
   } 
}

export const getOne=async (req,res) => {
    try {
      const id= req.params.id;
     const userExist= await User.findById(id)
     if (!userExist) {
        return res.status(404).json({msg:"User  is not found"})

     }
     res.status(200).json(userExist)

    } catch (error) {
        res.status(500).json({error: error})
  
    }
}
export const update =async (req,res) => {
    try {
        const id= req.params.id;
        const userExist= await User.findById(id)
        if (!userExist) {
           return  res.status(404).json({msg:"User  is not found"})
        }
        const updatedData= await User.findByIdAndUpdate(id, req.body  , {new:true})

        res.status(200).json({msg:"User Updated successfully"})
    } catch (error) {
        res.status(500).json({error: error})
 
    }
}
export const deleteUser = async (req,res) => {
try {
  const id= req.params.id;
  const userExist= await User.findById(id)
if (!userExist) {
  return  res.status(404).json({msg:"User  not exist"})

}
await User.findByIdAndDelete(id)
res.status(200).json({msg:" User deleted successfully"})
} catch (error) {
  res.status(500).json({error: error})

}
}

export const getAll=async (req,res) => {
  try {
    const userData= await User.find()
    if (!userData) {
        return res.status(404).json({msg:"User Data is not found"}) 
    }
    res.status(200).json(userData)
  } catch (error) {
    res.status(500).json({error: error})

  }  
}