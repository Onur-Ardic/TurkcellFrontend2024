import { Component } from "react";

class DenemeClass extends Component {
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

export default DenemeClass;