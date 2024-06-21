import { Request, Response, Router } from "express";
import Controllers from "../controllers";

export const getAllResponsesRoute = Router();

getAllResponsesRoute.get('/getAllResponses', (req: Request, res: Response) => Controllers.getAllResponses(req, res));