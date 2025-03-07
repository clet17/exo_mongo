import { Router } from "express";
import { createRecette, deleteRecette, getAllRecettes, getRecettesById, updateRecette } from "../controllers/recetteController.js";
const recettesRouter = Router()

recettesRouter.get('/recettes', getAllRecettes)
recettesRouter.get('/recettes/:id', getRecettesById)

recettesRouter.post('/recettes', createRecette)

recettesRouter.put('/recettes/:id',updateRecette)

recettesRouter.delete('/recettes/:id', deleteRecette)

export default recettesRouter