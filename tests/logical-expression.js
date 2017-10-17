function render() {
  return <div>
    {foo && [<div>One</div>,
     <div>Two</div>,
     <div>I am a snowflake!</div>
    ]}
  </div>
}
