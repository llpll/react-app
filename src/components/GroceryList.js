import React, {Component} from "react"
import List from "./List"
import InputField from "./InputField"

class GroceryList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="list">
                <h1>Grocery List</h1>
                <InputField handleAddToList = {this.props.handleAddToList} />
                <List items={this.props.items} handleClick={this.props.handleClick} />
            </div>
        )
    }
  }
  
  export default GroceryList
  