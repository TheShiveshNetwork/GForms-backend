import { Router } from 'express';
import { getAllFormsRoute } from './getAllForms';
import { getFormByIdRoute } from './getFormById';
import { submitFormRoute } from './submitForm';
import { addFormRoute } from './addForm';
import { getResponseByIdRoute } from './getResponseById';
import { getAllResponsesRoute } from './getAllResponses';
import { pingRoute } from './ping';
import { readRoute } from './read';
import { submitRoute } from './submit';

export const routes = Router();

// Task routes
routes.use(pingRoute);
routes.use(submitRoute);
routes.use(readRoute);

// Additional routes
routes.use(getAllFormsRoute);
routes.use(getFormByIdRoute);
routes.use(submitFormRoute);
routes.use(addFormRoute);
routes.use(getResponseByIdRoute);
routes.use(getAllResponsesRoute);