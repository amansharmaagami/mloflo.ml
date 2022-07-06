import mongoose from "mongoose";

const connectMongo = async () =>
	mongoose.connect(
		process.env.DB_URI,
		{ useUnifiedTopology: true }
	);

export default connectMongo;
