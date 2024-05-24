import { Component } from "react";

export default class DenemeClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.isim}</p>
      </div>
    );
  }
}
