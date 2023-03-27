import { connectToDB, insertData } from "../../../helpers/DBUtils";

export default async function handler(request, response) {
  const client = await connectToDB();
  if (request.method === "POST") {
    const { email, name, msg } = request.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !msg ||
      !msg.trim() === ""
    ) {
      response.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMsg = {
      email,
      name,
      msg,
    };

    const result = await insertData(client, "contacts", newMsg);

    console.log(result);

    response.status(201).json({ message: "Added Data :)" });
  }
}
