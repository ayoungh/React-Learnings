const App = (props) => {
  var myStyle = {
    backgroundColor: '#000',
    height: 10
  }

  return (
    <div style={myStyle}>
      <a href="#"
        not-rendered="x"
        onClick={update}>
        {/* this is a comment*/}
        this is the text
        {i>1 ? 'More than one' : 'one'}
        {i>1 && 'More than one'}
      </a>
    </div>
  )

}
