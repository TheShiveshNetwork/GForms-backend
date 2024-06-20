import { Request, Response, Router } from "express";
import Controllers from "../controllers";

export const getResponseByIdRoute = Router();

getResponseByIdRoute.get('/getResponseByFormId/:id', (req: Request, res: Response) => Controllers.getResponseByFormId(req, res) );