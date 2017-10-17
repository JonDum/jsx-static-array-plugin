function render() {
  return React.createElement(
    "div",
    null,
    new StaticArray(React.createElement(
      "div",
      null,
      "One"
    ), React.createElement(
      "div",
      null,
      "Two"
    ), React.createElement(
      "div",
      null,
      "I am a snowflake!"
    ))
  );
} 
