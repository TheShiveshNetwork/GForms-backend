import { Request, Response, Router } from "express";
import Controllers from "../controllers";

export const getAllFormsRoute = Router();

getAllFormsRoute.get('/getAllForms', (req: Request, res: Response) => Controllers.getAllForms(req, res));