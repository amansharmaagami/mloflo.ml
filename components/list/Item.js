import { useState } from "react";

import Email from "../Email";

export default function Item({
	_id,
	from = "",
	subject = "",
	text = "",
	html = "",
	createdAt = new Date(),
}) {
	const [isMailOpen, setIsMailOpen] = useState(false);

	function Wrapper({ children }) {
		return children;
	}

	function Actions() {
		return (
			<div className="flex flex-row justify-center m-2">
				<button
					onClick={() => setIsMailOpen(false)}
					className=" whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
				>
					Close
				</button>
			</div>
		);
	}
	return (
		<>
			<li
				className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg cursor-pointer hover:bg-gray-100"
				onClick={() => setIsMailOpen(true)}
			>
				<div className="row p-1 font-bold flex flex-row justify-between">
					<h4> {subject} </h4>

					<p className="font-normal text-gray-500">
						{createdAt.toLocaleString()}
					</p>
				</div>
				<div className="row p-1 border-bottom">{text}</div>
			</li>
			{isMailOpen && (
				<Wrapper>
					<Actions />
					<Email html={html} text={text} />
				</Wrapper>
			)}
		</>
	);
}
