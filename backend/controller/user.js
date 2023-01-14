// import User from "../model/User.js";
// import { nanoid } from "nanoid";


// export const getUrlById = async (req,res)=>{
//     try {
//         const id = req.params.id
//         const urlById = await User.findOne({shortId : id})
//         res.status(200).send({
//           success: true,
//           data: urlById,
//         });
//     } catch (error) {
//         res.status(400).send({
//             success:false,
//             data:error.message,
//         })
//     }
// }

// export const create = async (req, res )=>{
//     try {
//         const user = await User.create(req.body);
//         console.log(req.body)
//         res.status(200).send({
//             success:true,
//             data:user,
//         })
//     } catch (error) {
//     res.status(400).send({
//         success:false,
//         data:error.message,
//     })    
//     }
// }
