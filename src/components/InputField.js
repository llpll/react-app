import React, {Component} from "react"

class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.handleAddToList(this.state.title)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <input 
                    type="text" 
                    placeholder="What you want to buy?" 
                    name="title"
                    value = {this.state.title}
                    onChange={this.handleChange}
                />
               <button>Add to list</button>
            </form>
        )
    }
  }
  
  export default InputField
  