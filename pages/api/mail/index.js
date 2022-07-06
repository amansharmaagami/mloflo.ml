import db from "../../../utils/db";
import Mail from "../../../models/Mail";
import multer from "multer";

const storage = multer.diskStorage({
	destination: "uploads/",
});

const upload = multer({
	// storage,
	limits: { fileSize: 52428800 },
});

export const config = {
	api: { bodyParser: false },
};

export default async function handler(req, res) {
	await new Promise((resolve) => {
		// you may use any other multer function
		const mw = upload.none();

		//use resolve() instead of next()
		mw(req, res, resolve);
	});

	await db();

  const test = await Mail.create(req.body);

	res.status(201).send(test);
}
