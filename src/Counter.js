import { Component } from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
  //overwrite constructor
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {style => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  //set state in asynchronous
  //so if we want to use the previous state we should use the prevState in an arrow function
  changeCount(amount) {
    this.setState(prevState => {
      return { count: prevState.count + amount };
    });
  }
}
