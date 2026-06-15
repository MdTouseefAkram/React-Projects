import { Component } from "react";

class ClassComponentToggle extends Component{
    constructor(props){
        super(props);
        // console.log(this.props)

        //state initialization
        this.state = {
            isOn : false
        } 
    }

    handleToggle = ()=>{
        this.setState(prevState =>({
            isOn : !prevState.isOn,
        }))
    };

    render(){
        return(
            <>
            <h3>Toggle</h3>
            <button onClick={this.handleToggle}>{this.state.isOn ? 'ON' :'OFF'}</button>
            </>
        )
    }

}
export default ClassComponentToggle;