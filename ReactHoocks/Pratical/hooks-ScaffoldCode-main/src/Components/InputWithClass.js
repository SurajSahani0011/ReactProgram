import React from "react";

export default class Input extends React.Component{
    constructor(){
        super();
        this.state={
            name: "",
            lastName:""
        }
    }

    handlelName =(e) => {
        this.setState({
            name: e.target.value
        })
    }

    handlelLastName =(e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    render(){
        return(
            <>
            <div className="section">
                <Row label="Name">
                        <input value={this.state.name} onChange={this.handlelName} className="input"/>
                </Row >
                <Row label="Last Name">
                        <input value={this.state.lastName} onChange={this.handlelLastName} className="input"/>
                </Row >
            </div>
    
            <h2>Hello, {this.state.name + " "+this.state.lastName} </h2>
            
            </>
            )

    }
   
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
