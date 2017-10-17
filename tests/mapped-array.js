function render() {
	const processNodes = (nodes) => nodes.map((node) => <div>{node}</div>);

	return (
		<div>
			{processNodes([
				<span>A</span>,
				<span>B</span>
			])}
		</div>
	);
}
