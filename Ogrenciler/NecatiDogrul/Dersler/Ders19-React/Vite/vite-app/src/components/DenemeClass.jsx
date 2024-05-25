import {Component} from 'react';

export default class DenemeClass extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
            <div>DenemeCLASS</div>
            <div>{ this.props.isim }</div>
            </>
        )
    }
}