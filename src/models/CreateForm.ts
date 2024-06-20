import { MongoDBClient } from "../mongodb";
import { CreateFormRequest } from "../schemas";

class CreateFormClass {
    private dbName:string;
    private collectionName:string;
    constructor() {
        this.dbName = 'test';
        this.collectionName = 'forms';
    }

    async createForm(form:CreateFormRequest): Promise<any> {
        let MongoClient = new MongoDBClient;
        const db = MongoClient.getDb();
        const collection = db.collection(this.collectionName);
        try {
            const result = await collection.insertOne(form);
            return result;
        } catch (error) {
            console.error('Error creating form:', error);
        }
    }
}

let CreateForm = new CreateFormClass();
export default CreateForm;