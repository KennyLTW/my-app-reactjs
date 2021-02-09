import React, { Fragment, Component } from "react";
//import Fragment from 'react';

//Fragment = <div></div>

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //save data in state
            inputValue: "",
            list: [],
        };
    }

    //only render ui
    render() {
        return (
            <Fragment>
                Input:{" "}
                <input
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleBtnClick.bind(this)}>submit</button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>;
                    })}
                </ul>
            </Fragment>
        );
    }

    //modify state data
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    handleBtnClick() {
        this.setState({
            //list: this.state.list.concat(this.state.inputValue),      //same as below
            list: [...this.state.list, this.state.inputValue],
            inputValue: "",
        });
    }

    handleItemDelete(index) { 
        //immuatable = state不允許我們做任何的改變
        const list = [...this.state.list];          //copy list as copied
        list.splice(index, 1);
        
        //在React中, 改data一定要用setState
        this.setState({ 
            list: list                              //copied -> list
        })
    }
}

export default ToDoList;
