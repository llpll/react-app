import React from "react"

function ListItem(props) {
    return (
        <li 
            id={props.item.id}
            className = "list-item"
            value = {props.item.title}
            onClick = {props.handleClick ? (event) => {props.handleClick(event)} : null}
        >
            {props.item.title}
            {props.item.amount ? ' x ' + props.item.amount : ''}
        </li>
    )
  }
  
  export default ListItem;
  