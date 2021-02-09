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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
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
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick}>submit</button>
                <ul>
                    {this.getToDoItem()}
                </ul>
            </Fragment>
        );
    }

    getToDoItem() {
        return this.state.list.map((item, index) => {
            return (
                <ToDoItem content={item} index={index}          //{/*將item放入content, 然後pass to ToDoItem*/}
                key={index} 
                handleItemDelete={this.handleItemDelete} />
            );
        })
    }

    //modify state data
    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({                                       //ES6
                inputValue: value
        }))
        /*  ES5
        this.setState({
            inputValue: e.target.value,
        });
        */
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: "",
        }))

        /*
        this.setState({
            //list: this.state.list.concat(this.state.inputValue),      //same as below
            list: [...this.state.list, this.state.inputValue],
            inputValue: "",
        });
        */
    }

    handleItemDelete(index) {
        //immuatable = state不允許我們做任何的改變
        //const list = [...this.state.list]; //copy list as copied
        //list.splice(index, 1);

        this.setState((prevState) => {          //ES6
            const list = [...prevState.list]; //copy list as copied
            list.splice(index, 1);
            return {list}
        });

        /*
        //在React中, 改data一定要用setState
        this.setState({
            list: list, //copied -> list
        });
        */
    }
}

export default ToDoList;
