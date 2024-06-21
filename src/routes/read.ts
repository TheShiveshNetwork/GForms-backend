import { Request, Response, Router } from "express";
import Controllers from "../controllers";

export const readRoute = Router();

readRoute.get('/read', (req: Request, res: Response) => Controllers.read(req, res));