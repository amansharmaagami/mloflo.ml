import { Schema, model, models } from "mongoose";

const mailSchema = new Schema(
	{
		_inbox: {
			type: String,
			select: false,
		},
		to: {
			type: String,
			required: true,
		},
		from: {
			type: String,
			required: true,
		},
		subject: {
			type: String,
			required: true,
		},
		sender_ip: {
			type: String,
		},
		text: {
			type: String,
		},
		html: {
			type: String,
		},
	},
	{ timestamps: true }
);

mailSchema.index({ createdAt: 1 }, { expireAfterSeconds: 7200 });
mailSchema.index({ _inbox: 1 });

mailSchema.pre("save", async function () {
	if (this.isNew) {
		this._inbox = this.to.split("@").shift();
	}
});

const Mail = models.mail || model("mail", mailSchema);

export default Mail;
