import { Component } from "react";

export default class TestClass extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
               <div>Test Class</div>
               <div>{this.props.isim}</div>
            </>
        );
    }
}
