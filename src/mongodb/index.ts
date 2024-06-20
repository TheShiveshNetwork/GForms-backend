import { MongoClient } from "mongodb";

export class MongoDBClient {
    private url: string;
    private dbName: string;
    private client: MongoClient;
    constructor() {
        this.url = process.env.MONGODB_URL || "mongodb://localhost:27017/";
        this.dbName = process.env.dbName || "test";
        this.client = new MongoClient(this.url, {});
    }
    async init() {
        try {
            await this.client.connect();
            console.log('connected to db');
        } catch (error) {
            console.log(`Error: Could not connect to db ${error}`);
        }
    }
    getDb() {
        return this.client.db(this.dbName);
    }
    getCollection(collectionName:string) {
        return this.getDb().collection(collectionName);
    }
    close() {
        this.client.close();
    }
}

