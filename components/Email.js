export default function Email({ html, text }) {
	return (
		<div className="rounded overflow-hidden shadow-lg p-6 border">
			{html ? <div dangerouslySetInnerHTML={html}></div> : <div>{text} </div>}
		</div>
	);
}
