

export const VerifyUserFields = (req, res, next) => {
    const {first_name, last_name, email, password} = req.body
    try{
        if(!first_name || !last_name || !email || !password){
            return res.status(400).json('Tout les champs doivent être remplis')
        }
        next()
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}