import { connectToDB, insertData } from "../../../helpers/DBUtils";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const userEmail = request.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      response.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client;

    try {
      client = await connectToDB();
    } catch (error) {
      response.status(500).json({ message: error });
      return;
    }

    await insertData(client, "emails", { email: userEmail });

    response.status(201).json({ message: "Signed up!" });
  }
}
