import { type NextFunction, type Request, type Response, Router } from "express"
import * as jwt from "jsonwebtoken"

import bodyValidation from "@middleware/bodyValidation.middleware"
import { authorizationDto } from "@schemas/authorizationDto.schema"
import ExpressError from "@errors/ExpressError"
import authorizationMiddleware from "@middleware/authorization.middleware"

const routerPath = "/account"
const accountRouter = Router()

// Sign up

// const signUpUpload = multer({
//     limits: {
//         fileSize: 1024 * 1024 * 10,
//     },
//     fileFilter: (req: Request, file: Express.Multer.File, callBack: FileFilterCallback) => {
//         if(['image/jpeg', 'image/png'].includes(file.mimetype) && file.fieldname === 'avatar') {
//             callBack(null, true)
//         }
//         else callBack(null, false)
//     }
// }).single('avatar')

// authorizationRouter.post(
//     `${routerPath}/signup`,
//     signUpUpload,
//     bodyValidation(authorizationDto),
//     async (req: Request, res: Response) => {
//         try {
//             const result = signUp({ ...req.body, avatar: req.file } as SignUpDtoType)
//             return res.status(200).json({});
//         } catch (err) {
//             return res.sendStatus(500);
//         }
//     },
// );

// Sign in
accountRouter.post(
    `${routerPath}`,
    bodyValidation(authorizationDto),
    (req: Request, res: Response, next: NextFunction) => {
        try {
            return res.json([])
        } catch (err) {
            next(err)
        }
    }
)

// Is signed in
accountRouter.get(
    `${routerPath}/me`,
    authorizationMiddleware("anonymous"),
    (req: Request, res: Response, next: NextFunction) => {
        try {
            return res.status(200).json({
                user: req.locals?.user,
            })
        } catch (err) {
            console.error(err)
            next(err)
        }
    }
)

export default accountRouter
