import User from '../models/User'

const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


const login = (req, res, next) => {
    if(typeof req?.body?.username === "string" && typeof req?.body?.password === "string"){
        if(req?.body?.username === "Justine" && req?.body?.password === "123"){
            req.user = {
                username : "Justine",
                password : "123"
            }
            next()
        }
        else res.status(401).json({login: false, message:'bad login'})
    }
    else res.status(403).json({login: false, message:'argument(s) missing'})
}

const register = (req, res, next) => {
    if(typeof req?.body?.email === "string" && typeof req?.body?.password === "string" && emailRegex.test(req?.body?.email)){
       if ( emailRegex.test(req?.body?.email)){

       
        }
        else res.status(401).json({login: false, message:'bad login'})
    }
    else res.status(403).json({login: false, message:'argument(s) missing'})
}

const user = {
    login,
    register
}

export default user