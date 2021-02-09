import React from "react";

class ToDoItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {content} = this.props;                         //ES6
    return <div onClick={this.handleClick}>{content}</div>;
  }

  handleClick() {
    //console.log(this.props.index)
    const {handleItemDelete, index} = this.props;             //ES6
    handleItemDelete(index);
    //this.props.handleItemDelete(this.props.index)
  }
}


export default ToDoItem;
