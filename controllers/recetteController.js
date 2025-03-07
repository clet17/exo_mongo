import Recette from "../models/recettes.js";

export const getAllRecettes = async (req, res) => {
    try{
            const recettes = await Recette.find().populate('author')
            if(recettes.length < 1){
                return res.status(400).json('Aucune recette trouvée')
            }
            return res.status(200).json(recettes)
        }
        catch(err){
            console.log(err)
            return res.status(500).json('Internal server error')
        }
}


export const getRecettesById = async (req, res) => {
    const {id} = req.params
    try{
        const RecetteByID = await Recette.findById(id).populate('author')
        if (!RecetteByID){
            return res.status(404).json('Recette introuvable')
        }
        return res.status(200).json(RecetteByID)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}


export const createRecette = async (req, res) => {
    try{
        const newRecette = await Recette.create(req.body)
        return res.status(201).json(newRecette)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}

export const updateRecette = async (req, res) => {
    const {id} = req.params
    try{
        const RecetteByID = await Recette.findByIdAndUpdate(id, req.body, {new : true})
        if (!RecetteByID){
            return res.status(404).json('Recette introuvable')
        }
        return res.json(RecetteByID)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}

export const deleteRecette = async (req, res) => {
    const {id} = req.params
    try{
        const RecetteByID = await Recette.findByIdAndDelete(id)
        
        if (!RecetteByID){
            return res.status(404).json('Recette introuvable')
        }
        if(deleteRecette){
            return res.status(204).json('Recette supprimé')
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}