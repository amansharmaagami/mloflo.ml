export default function List({ children }) {
	return (
		<div className="flex justify-center">
			<ul className="bg-white rounded-lg w-6/12 text-gray-900 h-[38rem] overflow-auto scroll">
				{children}
			</ul>
		</div>
	);
}
