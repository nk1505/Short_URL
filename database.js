import mongodb from "mongodb";

const uri = 'mongodb+srv://dbUser:RhFSgR8njYbBr4hc@domain.ys5cr.mongodb.net/domains.domains?retryWrites=true&w=majority';
const client = new mongodb.MongoClient(uri);

await client.connect();



export default client.db("domains")