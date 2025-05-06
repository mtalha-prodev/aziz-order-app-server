import { connect } from "mongoose";

export const database = async () => {
  try {
    const { connection } = await connect(process.env.MONGO_URL, {});

    console.log("database connection success", connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
