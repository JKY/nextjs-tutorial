import data from "@/app/data/questions"
import { MongoClient } from "mongodb";
if (!global.client)
    global.client = new MongoClient(`mongodb://localhost:27017`);
export async function GET(request) {
    const items = await global.client.db("foo").collection("foo").find({}).toArray();
    console.log(items);
    return Response.json({});
}