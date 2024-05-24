import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>Deneme Class</div>
        <div>{this.props.isim}</div>
      </>
    );
  }
}
