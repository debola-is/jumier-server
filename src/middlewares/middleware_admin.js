import { verify } from 'jsonwebtoken';
import { findById } from '../models/user_model';

const admin = async (req, res, next) => {
    try{
        const token = req.header('user-auth-token');
    if (!token) return res.status(401).json({msg: "No auth token, access denied!"});
    const isVerified = verify(token, "passwordKey");
    if (!isVerified) return res
    .status(401)
    .json({msg: "Token verification failed, authorization denied!"});

    const user = await findById(isVerified.id);

    if(user.type == 'user' || user.type == 'seller') {
        return res
        .status(401)
        .json({msg: "You are not an admin, authorization denied!"}); 
    }

    req.user = isVerified.id;
    req.token = token;

    next();
    }
    catch(e) {
        res.status(500).json({error: e.message});
    }

}

export default admin;