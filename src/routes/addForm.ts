import { Request, Response, Router } from "express";
import Controllers from "../controllers";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json()

export const addFormRoute = Router();

addFormRoute.post('/addForm', jsonParser, (req: Request, res: Response) => Controllers.addForm(req, res));