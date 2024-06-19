import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb://127.0.0.1:27017/foo`;
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
}
let mongo;
if (process.env.NODE_ENV === "development") {
    if (!global.mongo) {
        let client = new MongoClient(uri, options);
        global.mongo = client;//client.connect();
    }
    mongo = global.mongo;
} else {
    let client = new MongoClient(uri, options);
    mongo = client;//client.connect();
}
export default mongo;