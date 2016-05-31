import React from 'react'
import ReactDOM from 'react-dom'

class InputUpdate extends React.Component {
  constructor(){
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({
      val: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    });
  }
  render(){
    return(
      <div>
        <h3>Input Number Increase</h3>
        <NumInput
          ref='red'
          min={0}
          max={255}
          step={1}
          val={+this.state.val}
          label={'Val'}
          update={this.update}/>
      </div>
    );
  }
}

class NumInput extends React.Component{
  render(){
    let label = this.props.label !== '' ?
      <label>{this.props.label} - {this.props.val}</label> : ''
    return(
      <div>
        <input
          ref='inp'
          type={'number'}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update} />
        {label}
      </div>
    );
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  red: 0,
  label: '',
  type: 'range'
}

export default InputUpdate
