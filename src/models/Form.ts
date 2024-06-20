import { MongoDBClient } from "../mongodb";
import { SubmitFormRequest } from "../schemas";

class FormClass {
    private collectionName:string;
    constructor() {
        this.collectionName = 'responses';
    }

    async createForm(form:SubmitFormRequest): Promise<any> {
        let MongoClient = new MongoDBClient;
        const db = MongoClient.getDb();
        const collection = db.collection(this.collectionName);
        try {
            const result = await collection.insertOne(form);
            return result;
        } catch (error) {
            console.error('Error inserting form:', error);
        }
    }
}

let Form = new FormClass();
export default Form;