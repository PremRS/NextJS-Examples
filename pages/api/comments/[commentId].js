import { connectToDB, getData, insertData } from "../../../helpers/DBUtils";

export default async function handler(request, response) {
  const commentId = request.query.commentId;

  const client = await connectToDB();

  if (request.method === "POST") {
    const { email, name, text } = request.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !text ||
      !text.trim() === ""
    ) {
      response.status(422).json({ message: "Invalid comment." });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      commentId,
    };

    const result = await insertData(client, "comments", newComment);

    console.log(result);

    response.status(201).json({ message: "Added Comment :)" });
  }

  if (request.method === "GET") {
    const commentsList = await getData(client, "comments");

    response.status(200).json({
      message: "Done",
      comments: commentsList,
    });
  }
}
