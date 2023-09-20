 

export default function ShoppingListForm({form, updateForm}){

    return(
        <form action="">
            <label htmlFor="item"></label>
            <input type="text" id="item" name="item" placeholder="ex_MILK" value={form.item} onChange={updateForm}/>
            <button>submit</button>
        </form>
    )
}