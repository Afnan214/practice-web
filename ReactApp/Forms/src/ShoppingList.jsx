import ShoppingListForm from "./ShoppingListForm";
import { useState } from "react";
import Item from "./Item";
import {v4 as uuid} from "uuid"
export default function ShoppingList() {

    const [items, setItems] = useState([])
    
    const addItem = (item)=> {
        setItems((oldItems)=>{
            return [...oldItems, {id:uuid() , product: item.product, quantity: item.quantity}]
        })
    }
    const deleteItem = (id) =>{
        setItems((oldItems)=>{
            return oldItems.filter((item)=> id!==item.id)
        })
    }
    return (
        <>
            <div className="container"><ShoppingListForm addItem={addItem}/></div>
        <div className="container">
                <h2>Shopping List</h2>
                <ul>
                    {items.map((item) => {
                        return <Item key={item.id} Item={item} func={deleteItem}/>
                    })}
                </ul>
        </div>
        </>
    )
}