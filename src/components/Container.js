import React, {Component} from "react"
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "Apples" },
                { id: 2, title: "Bread" },
                { id: 3, title: "Eggs" },
                { id: 4, title: "Milk" },
            ],
            shoppingCartItems: [
                // { id: 1, title: "Apples", amount: 1 },
            ],
        }

        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.addToList = this.addToList.bind(this)
    }

    handleClickGroceryItem(event) {
        const id = event.target.getAttribute('id')
        const itemName = event.target.getAttribute('value')

        this.setState((prevState) => {
            let newState = { ...prevState}
            let found = false

            newState.shoppingCartItems = []
            prevState.shoppingCartItems.forEach((item) => {
                if (item.id == id) {
                    newState.shoppingCartItems = [...newState.shoppingCartItems, {
                        id: parseInt(id),
                        title: item.title,
                        amount: item.amount + 1   
                    }] 
                    found = true
                } else {
                    newState.shoppingCartItems = [...newState.shoppingCartItems, item]
                }
                
            })
            
            if(!found) {
                newState.shoppingCartItems = [...newState.shoppingCartItems, {
                    id: parseInt(id),
                    title: itemName,
                    amount: 1   
                }] 
            }

            return newState
        })
    }

    emptyCart(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                shoppingCartItems: []
            }
        }) 
    }

    addToList(itemTitle) {
        this.setState((prevState) => {
            return {
                ...prevState,
                groceryItems: [...prevState.groceryItems, {
                    id: prevState.groceryItems.length + 1 ,
                    title: itemTitle    
                }]
            }
        })
    }

    render() {
        return (
            <div>
                <GroceryList 
                    items={this.state.groceryItems} 
                    handleClick={this.handleClickGroceryItem} 
                    handleAddToList={this.addToList}
                />
                <ShoppingCart 
                    items={this.state.shoppingCartItems} 
                    emptyCart={this.emptyCart}
                />        
            </div>
        )
    }
  }
  
  export default Container
  