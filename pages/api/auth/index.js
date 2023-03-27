import { connectToDB, insertData } from "../../../helpers/DBUtils";
import { hashPassword } from "../../../helpers/HashUtils";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const client = await connectToDB();

    const { email, password } = request.body;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      response.status(422).json({ message: "Invalid input." });
      return;
    }

    const db = client.db();

    const existingUser = db.collection("users").findOne({
      email: email,
    });

    if (!existingUser) {
      response.status(422).json({ message: "User Already Exists :)" });
      return;
    }

    const hashedPassword = await hashPassword(password);

    await insertData(client, "users", {
      email: email,
      password: hashedPassword,
    });
    response.status(201).json({ message: "User Created :)" });
  }
}
