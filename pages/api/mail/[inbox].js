import db from "../../../utils/db";
import Mail from "../../../models/Mail";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(404).send();
	}
	await db();

	const mails = await Mail.find({ _inbox: req.query.inbox }).sort({
		createdAt: -1,
	});

	res.send(mails);
}
