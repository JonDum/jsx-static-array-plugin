function render() {
	const wrapWithContainer = (content) => <div>{content}</div>;

	return (
		<div>
			{wrapWithContainer([
				<span>A</span>,
				<span>B</span>
			])}
		</div>
	);
}
