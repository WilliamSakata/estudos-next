import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../utils/database";

interface ErrorResponseType {
  error: string;
}

interface SuccessResponseType {
  _id: string;
  name: string;
  age: number;
  email: string;
  cellphone: string;
  cpf: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  const { name, age, email, cellphone, cpf } = req.body;

  if (req.method === "POST") {
    if (!name || !age || !email || !cellphone || !cpf) {
      res.status(400).json({ error: "Missing body params" });
      return;
    }

    const { db } = await connect();

    const response = await db.collection("user").insertOne({
      name,
      age,
      email,
      cellphone,
      cpf,
    });

    res.status(200).json(response.ops[0]);
  } else {
    res.status(400).json({ error: "Not valid request type" });
  }
};
