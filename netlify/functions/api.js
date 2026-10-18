import serverless from "serverless-http";
import app from "../../server.js";
import { connectDB } from "../../config/db.js";

const serverlessHandler = serverless(app);

export const handler = async (event, context) => {
  await connectDB();

  return serverlessHandler(event, context);
};
