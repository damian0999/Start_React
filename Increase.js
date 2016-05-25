import React from 'react'

class Increase extends React.Component{
  constructor(){
    super();
    this.state={
      val: 0
    }
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({
      val: this.state.val +1
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.val % 5 === 0;
  }
  render(){
    return(
      <div>
        <h3>Increasing</h3>
        <button onClick={this.update}>{this.state.val}</button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
  }
}

export default Increase
