import { Request, Response, Router } from "express";
import Controllers from "../controllers";

export const getResponseByIdRoute = Router();

getResponseByIdRoute.get('/getResponseById/:id', (req: Request, res: Response) => Controllers.getResponseById(req, res) );