import { useState } from "react";

export default function ShoppingListForm({addItem}){
    const [form, setForm] = useState({
        product: "",
        quantity: 0
    });
    const updateForm = (evt) => {
        const fieldName = evt.target.name;
        const value = evt.target.value;
        setForm((old) => { return { ...old, [fieldName]: value}  });
    };
    const handleSubmit = (e) => {
        addItem(form) ;
        e.preventDefault();
    }
    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="product">Product: </label>
            <input type="text" id="product" name="product" placeholder="ex_MILK" value={form.product} onChange={updateForm}/>
            <label htmlFor="quantity">  Quantity: </label>
            <input type="number" id="quantity" name="quantity" placeholder={2} value={form.quantity} onChange={updateForm}/>
            <button>submit</button>
        </form>
    )
}