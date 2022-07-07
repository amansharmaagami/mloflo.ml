import { Letter } from "react-letter";

export default function Email({ html, text }) {
	return (
		<div className="rounded overflow-hidden shadow-lg sm:p-2 md:p-4 lg:p-6 border">
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
