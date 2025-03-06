import User from "../models/users.js";

export const getAllUsers = async (req, res) => {
    try{
            const users = await User.find()
            if(users.length < 1){
                return res.status(400).json('Utilisateurs non trouvés')
            }
            return res.status(200).json(users)
        }
        catch(err){
            console.log(err)
            return res.status(500).json('Internal server error')
        }
}


export const getUsersById = async (req, res) => {
    const {id} = req.params
    try{
        const userByID = await User.findById(id)
        if (!userByID){
            return res.status(404).json('Utilisateur introuvable')
        }
        return res.status(200).json(userByID)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}


export const createUser = async (req, res) => {
    const {first_name, last_name, email, password} = req.body
    try{
        const newUser = await User.create(req.body)
        return res.status(201).json(newUser)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params
    try{
        const userByID = await User.findByIdAndUpdate(id, req.body, {new : true})
        if (!userByID){
            return res.status(404).json('Utilisateur introuvable')
        }
        return res.json(userByID)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}

export const deleteUser = async (req, res) => {
    const {id} = req.params
    try{
        const userByID = await User.findByIdAndDelete(id)
        if (!userByID){
            return res.status(404).json('Utilisateur introuvable')
        }
        if(deleteUser){
            return res.status(204).json('Utilisateur supprimé')
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}