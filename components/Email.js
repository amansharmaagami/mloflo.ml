import { Letter } from "react-letter";

export default function Email({ html, text }) {
	return (
		<div className="rounded overflow-hidden shadow-lg p-6 border">
			{html ? (
				<Letter
					html={html}
					useIframe
					className="h-[40rem]"
				/>
			) : (
				<div>{text} </div>
			)}
		</div>
	);
}
