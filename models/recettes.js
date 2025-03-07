import mongoose, {Schema} from "mongoose";


const recetteSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    category : {
        type : String
    },
    Pays : {
        type : String
    },
    description : {
        type : String
    },
    ingredients : [{type: String}],
    steps : [{type: String}],
    author : {
        type : Schema.Types.ObjectId, ref : 'User'
    }
})

export default mongoose.model('Recette', recetteSchema)