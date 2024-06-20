import { Request, Response, Router } from "express";
import Controllers from "../controllers";

export const getFormByIdRoute = Router();

getFormByIdRoute.get('/getFormById/:id', (req: Request, res: Response) => Controllers.getFormById(req, res) );