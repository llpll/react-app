import React, {Component} from "react"
import ListItem from "./ListItem"

class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.items.map((item) => {
                            return <ListItem key={item.id} item={item} handleClick={this.props.handleClick} />
                        })
                    }
                </ul>
            </div>
        )
    }
  }
  
  export default List
  