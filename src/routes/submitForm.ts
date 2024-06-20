import { Request, Response, Router } from "express";
import Controllers from "../controllers";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json()

export const submitFormRoute = Router();

submitFormRoute.post('/submitForm', jsonParser, (req: Request, res: Response) => Controllers.submitForm(req, res));