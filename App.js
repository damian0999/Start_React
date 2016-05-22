import React from 'react'

// class has state
class App extends React.Component{
  render(){
    return(
      <div>
        <h1> {this.props.title} </h1>
        <p> {this.props.number} </p>
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string,
  number: React.PropTypes.number.isRequired
}

App.defaultProps = {
  title: "You should write your title",
  number: 0
}

// without state
// const App = () => <h1> Hello </h1>

export default App
