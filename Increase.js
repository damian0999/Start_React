import React from 'react'

let Mixin = InnerComponent => class extends React.Component{
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
      <InnerComponent update={this.update} {...this.state} {...this.props} />
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
  }
}

const Button = (props) => {
  return(
    <button onClick={props.update}>
      {props.txt} - {props.val}
    </button>
  );
}

const Label = (props) => {
  return(
    <label onMouseMove={props.update}>
      {props.txt} - {props.val}
    </label>
  );
}

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class Increase extends React.Component{
  render(){
    return(
      <div>
        <ButtonMixed txt='Button' />
        <LabelMixed txt='Label' />
      </div>
    );
  }
}

export default Increase
