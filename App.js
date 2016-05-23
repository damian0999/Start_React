import React from 'react'

// class has state
class App extends React.Component{
  constructor(){
    super();
    this.state = { txt: '' }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      txt: e.target.value
    });
  }
  render(){
    return (
      <Wiget txt = {this.state.txt} count = {this.state.txt.length}
      update = {this.update} />
    );
  }
}

const Wiget = (props) => {
  return(
    <div>
      <input type='text' onChange={props.update} />
      <h1> {props.txt} </h1>
      <p> {props.count} </p>
    </div>
  );
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
