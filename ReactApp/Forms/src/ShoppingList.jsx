import ShoppingListForm from "./ShoppingListForm";
import { useState } from "react";
export default function ShoppingList(){
    const [form, setForm] = useState({
        item:""
    });
    const updateForm = (evt)=>{
        const fieldName = evt.target.name;
        const value = evt.target.value;
        setForm((old)=>{return {...old, [fieldName]:value}});
    }
    return (
        <><ShoppingListForm form={form} updateForm={updateForm}/></>
    )
}