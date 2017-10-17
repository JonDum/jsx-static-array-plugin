function render() {
	const wrapWithContainer = content => React.createElement(
		"div",
		null,
		content
	);

	return React.createElement(
		"div",
		null,
		wrapWithContainer([React.createElement(
			"span",
			null,
			"A"
		), React.createElement(
			"span",
			null,
			"B"
		)])
	);
}
