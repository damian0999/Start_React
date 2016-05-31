import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './Button'
import Increase from './Increase'
import InputUpdate from './InputUpdate'

// class has state
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: '',
      red: 0,
      green: 0,
      blue: 0,
     }
    this.update = this.update.bind(this)
    this.updateTxt = this.updateTxt.bind(this)
  }
  update(){
    this.setState({
      //references
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value,
    });
  }
  updateTxt(e){
    this.setState({
      txt: e.target.value,
    });
  }
  render(){
    return(
      <div>
        <Wiget txt = {this.state.txt} count = {this.state.txt.length}
        updateTxt = {this.updateTxt} />
        <hr />
        <h3>RGB Slider</h3>
        <Slider ref='red' update={this.update}/>
        {this.state.red}
        <br />
        <Slider ref='green' update={this.update}/>
        {this.state.green}
        <br />
        <Slider ref='blue' update={this.update}/>
        {this.state.blue}
        <br />
        <hr />
        <Wrapper />
        <hr />
        <Increase />
        <hr />
        <InputUpdate />
      </div>
    );
  }
}

class Slider extends React.Component{
  render(){
    return(
      <input type='range' min='0' max='255' onChange={this.props.update} />
    );
  }
}

const Wiget = (props) => {
  return(
    <div>
      <input type='text' onChange={props.updateTxt} />
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
