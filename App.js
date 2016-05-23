import React from 'react'

// class has state
class App extends React.Component{
  constructor(){
    super();
    this.state = { txt: '' }
  }
  update(e){
    this.setState({
      txt: e.target.value
    });
  }
  render(){
    return(
      <div>
        <input type='text' onChange={this.update.bind(this)} />
        <h1> {this.state.txt} </h1>
        <p> {this.state.txt.length} </p>
      </div>
    );
  }
}

// App.propTypes = {
//   txt: React.PropTypes.string,
//   number: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   title: "You should write your title",
//   number: 0
// }

// without state
// const App = () => <h1> Hello </h1>

export default App
