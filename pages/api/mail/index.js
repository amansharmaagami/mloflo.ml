import multer from "multer";
import emailParser from "address-rfc2822";

import db from "../../../utils/db";
import Mail from "../../../models/Mail";

const storage = multer.memoryStorage();

const upload = multer({
	storage,
	limits: { fileSize: 52428800 },
});

export const config = {
	api: { bodyParser: false },
};

export default async function handler(req, res) {
	await new Promise((resolve) => {
		// you may use any other multer function
		const mw = upload.any();

		//use resolve() instead of next()
		mw(req, res, resolve);
	});

	await db();

	const { to } = req.body;

	for (let email of to.split(",")) {
		const [{ address: to }] = emailParser.parse(email);

		if (to.split("@").pop() === process.env.DOMAIN) {
			await Mail.create({ ...req.body, to });
		}
	}

	res.status(201).send();
}
