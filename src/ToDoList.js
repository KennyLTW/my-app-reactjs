import React, { Fragment, Component } from "react";
import "./style.css";
//import Fragment from 'react';
import ToDoItem from "./ToDoItem";

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
                <label htmlFor="insertArea">Input: {/*comment in jsx*/}</label>
                <input
                    id="insertArea"
                    className="input"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleBtnClick.bind(this)}>submit</button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <div>
                                {/*將item放入content, 然後pass to ToDoItem*/}
                                <ToDoItem content={item} index={index} handleItemDelete={this.handleItemDelete.bind(this)} />
                                {/*
                            <li key={index} onClick={this.handleItemDelete.bind(this, index)}
                            {//唔show html code}
                            dangerouslySetInnerHTML={{__html: item}}>                      
                                
                            </li>
                            */}
                            </div>
                        );
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
        const list = [...this.state.list]; //copy list as copied
        list.splice(index, 1);

        //在React中, 改data一定要用setState
        this.setState({
            list: list, //copied -> list
        });
    }
}

export default ToDoList;
