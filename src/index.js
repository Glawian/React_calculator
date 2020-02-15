import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

function Button(props) {
  return (
    <button className="buttonPress">
      {props.value}
    </button>
  )
}

function Window(props) {
  return (
    <div className="upView">
      {props.value}
    </div>
  )
}

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  renderButton(i) {
    return <Button
      value={i}
    />
  }

  render() {
    return (
      <div className="calc">
        <Window value={this.state.value}/>
        <div>
          <div className="rowsAll">
            <div className="rowPress">
              {this.renderButton("x^2")}
              {this.renderButton("C")}
              {this.renderButton("DEL")}
              {this.renderButton("/")}
            </div>
            <div className="rowPress">
              {this.renderButton(7)}
              {this.renderButton(8)}
              {this.renderButton(9)}
              {this.renderButton("X")}
            </div>
            <div className="rowPress">
              {this.renderButton(4)}
              {this.renderButton(5)}
              {this.renderButton(6)}
              {this.renderButton("-")}
            </div>
            <div className="rowPress">
              {this.renderButton(1)}
              {this.renderButton(2)}
              {this.renderButton(3)}
              {this.renderButton("+")}
            </div>
            <div className="rowPress">
              {this.renderButton("+/-")}
              {this.renderButton(0)}
              {this.renderButton(",")}
              {this.renderButton("=")}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Calc />,
  document.getElementById("root")
)

serviceWorker.unregister();