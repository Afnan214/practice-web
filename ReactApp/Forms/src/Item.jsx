export default function Item({Item, func}){
    return(<><li>
        {Item.product} {Item.quantity} 
        <button >Delete</button>
    </li></>)
}