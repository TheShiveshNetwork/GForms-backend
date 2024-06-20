import { Router } from 'express';
import { getAllFormsRoute } from './getAllForms';
import { getFormByIdRoute } from './getFormById';
import { submitFormRoute } from './submitForm';
import { addFormRoute } from './addForm';
import { getResponseByIdRoute } from './getResponseById';

export const routes = Router();

routes.use(getAllFormsRoute);
routes.use(getFormByIdRoute);
routes.use(submitFormRoute);
routes.use(addFormRoute);
routes.use(getResponseByIdRoute);