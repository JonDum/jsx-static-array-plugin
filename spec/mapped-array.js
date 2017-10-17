function render() {
	const processNodes = nodes => nodes.map(node => React.createElement(
		"div",
		null,
		node
	));

	return React.createElement(
		"div",
		null,
		processNodes([React.createElement(
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
