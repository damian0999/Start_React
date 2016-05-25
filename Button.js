import React from 'react'
import ReactDOM from 'react-dom'

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount(){
    ReactDOM.render(<Button />, document.getElementById('wrapping'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('wrapping'))
  }
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id='wrapping'></div>
      </div>
    )
  }
}

class Button extends React.Component{
  constructor(){
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this)
  }
  componentWillMount() {
    console.log('mounting');
  }
  componentDidMount() {
    console.log('mounted');
  }
  componentWillUnmount() {
    console.log('bye');
  }
  update(){
    this.setState({
      val: this.state.val +1
    });
  }
  render(){
    console.log('rendering');
    return(
      <button onClick={this.update}>{this.state.val}</button>
    );
  }
}

export default Wrapper
