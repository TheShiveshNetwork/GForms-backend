import { Request, Response, Router } from "express";
import Controllers from "../controllers";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json()

export const submitRoute = Router();

submitRoute.post('/submit', jsonParser, (req: Request, res: Response) => Controllers.submit(req, res));