import React, {Component} from "react"
import List from "./List"

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="list">
                <h1> Shopping Cart </h1>
                <button onClick={this.props.emptyCart}>Empty cart</button>

                <List items={this.props.items} />
            </div>
        )
    }
  }
  
  export default ShoppingCart
  