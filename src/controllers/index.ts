import { Request, Response } from "express";
import { MongoDBClient } from "../mongodb";
import Form from "../models/Form";
import { CreateFormRequest, CreateFormSchemaValidator, GetFormByIdRequest, GetFormByIdSchema, GetResponseByFormIdSchema, GetResponseByIdSchema, SubmitFormRequest, SubmitFormSchemaValidator } from "../schemas";
import { z } from "zod";
import CreateForm from "../models/CreateForm";
import { ObjectId } from "mongodb";

class ControllerClass {
    private mongoClient = new MongoDBClient;

    constructor() {
        // Do something
        this.mongoClient.init();
    }

    async getAllForms(request:Request, response:Response) {
        const result = await this.mongoClient.getCollection('forms').find().toArray();
        if (result) {
            response.status(201).json(result);
        } else {
            response.status(404).json({ message: "No forms found" });
        }
    }

    async getFormById(request:Request, response:Response) {
        GetFormByIdSchema.parse(request);
        const formId = new ObjectId(request.params.id);
        const result = await this.mongoClient.getCollection('forms').findOne({ _id: formId });
        if (result) {
            response.status(201).json(result);
        } else {
            response.status(404).json({ message: "Form not found" });
        }
    }

    async getResponseById(request:Request, response:Response) {
        GetResponseByIdSchema.parse(request);
        const responseId = new ObjectId(request.params.id);
        const result = await this.mongoClient.getCollection('responses').findOne({ _id: responseId });
        if (result) {
            response.status(201).json(result);
        } else {
            response.status(404).json({ message: "Response not found" });
        }
    }

    async getResponseByFormId(request:Request, response:Response) {
        GetResponseByFormIdSchema.parse(request);
        const formId = new ObjectId(request.params.id);
        const result = await this.mongoClient.getCollection('responses').find({ formId: formId }).toArray();
        if (result) {
            response.status(201).json(result);
        } else {
            response.status(404).json({ message: "Responses for the form not found" });
        }
    }

    async addForm(request:Request, response:Response): Promise<void> {
        try {
            // Validate the request body using the Zod schema
            const data: CreateFormRequest = CreateFormSchemaValidator.parse(request);
            const result = await CreateForm.createForm(data);

            if (result.acknowledged) {
                console.log("Form added successfully!");
                response.status(201).json({ status: 'Successful' });
            } else {
                response.status(450).json({ message: 'An unhandled error occured, could not add form' });
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.error(`Error: `, {errors: error.errors});
                response.status(400).json({ message: 'A Validation error' });
            } else {
                console.error(`Error: Should Never Happen. ${error}`)
                response.status(500).json({ message: 'Error occured adding form' });
            }
        }
    }

    async submitForm(request:Request, response:Response) {
        try {
            // Validate the request body using the Zod schema
            const form: SubmitFormRequest = SubmitFormSchemaValidator.parse(request);
            const result = await Form.createForm(form);

            if (result.acknowledged) {
                console.log("Form added successfully!");
                response.status(201).json({ status: 'Successful' });
            } else {
                response.status(450).json({ message: 'An unhandled error occured, could not add form' });
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.error(`Error: `, {errors: error.errors});
                response.status(400).json({ message: 'A Validation error' });
            } else {
                console.error(`Error: Should Never Happen. ${error}`)
                response.status(500).json({ message: 'Error occured adding form' });
            }
        }
    }
}

let Controllers = new ControllerClass();
export default Controllers;