import { createElement, Component, render } from "./toy-react";

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.a.toString()}</p>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="d" class="hhh">
    <div>ffff</div>
    <div>ffff</div>
  </MyComponent>,
  document.body
);
