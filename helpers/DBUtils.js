import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@nextjs.ztxc6mi.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertData(client, dbName, data) {
  const db = client.db();
  const result = await db.collection(dbName).insertOne(data);

  return result;
}

export async function getData(client, dbName) {
  const db = client.db();
  const result = await db.collection(dbName).find().sort({ _id: -1 }).toArray();

  return result;
}
