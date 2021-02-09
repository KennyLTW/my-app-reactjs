import React from "react";

class ToDoItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <div onClick={this.handleClick}>{this.props.content}</div>;
  }

  handleClick() {
    //console.log(this.props.index)
    this.props.handleItemDelete(this.props.index)
  }
}


export default ToDoItem;
