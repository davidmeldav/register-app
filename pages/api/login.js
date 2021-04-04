

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const KEY = "seguridad123"

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
const USERS=db.getState().names ;


console.log(USERS);
export default (req, res) => {

  return new Promise(resolve => {
    const { method } = req;
    try {
      switch (method) {
        case 'POST':
        
          const { name, password } = req.body;
         
          if (!name || !password) {
            return res.status(400).json({
              status: 'error',
              error: 'Falta el nombre usuario o password',
            });
          }
          /* Check user email in jsonserver */
          const user = USERS.find(user => {
            return user.name === name;
          });
          /* Check if exists */
          if (!user) {
            /* Send error with message */
            res.status(400).json({ status: 'error', error: 'Usuario no encontrado' });
          }
          /* Variables checking */
          if (user) {
            const  userName = user.name,
              userPassword = user.password;//
              console.log("password",password);
              console.log("userPassword",userPassword)
            /* Check and compare password */
            if(password === userPassword){
              /* User matched */
           
                /* Create JWT Payload */
                const payload = {
                  name: userName
                };
                /* Sign token */
                jwt.sign(
                  payload,
                  KEY,
                  {
                    expiresIn: 31556926, // 1 year in seconds
                  },
                  (err, token) => {
                    /* Send succes with token */
                    res.status(200).json({
                      success: true,
                      token: 'Bearer ' + token,
                    });
                  },
                );
             
            }
            else{
                /* Send error with message */
                res
                .status(400)
                .json({ status: 'error', error: 'Password incorrecto' });
            }
          }
          break;
       
        default:
          break;
      }
    } catch (error) {
      throw error;
    }
    return resolve();
  });
};
