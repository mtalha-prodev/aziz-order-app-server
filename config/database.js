import { connect } from "mongoose";

export const database = async () => {
  try {
    const { connection } = await connect('mongodb://localhost:27017/OrderApp', {});

    console.log("database connection success", connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
