export default function List({ children }) {
	return (
		<div className="flex justify-center">
			<ul className="bg-white rounded-lg w-full md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 text-gray-900 h-[40rem] overflow-auto scroll">
				{children}
			</ul>
		</div>
	);
}
