import {useState, useEffect} from "react"

export default function Counter() {
    const [count,setCount] = useState(0)
    const [form, setForm] = useState({
        username:""
    })
    useEffect(()=>{
        console.log("use effect was called");
    },[count])
    const increment = ()=>{
        setCount((c)=>(c+1));
    ;}
    const update = (evt)=>{
        const fieldname = evt.target.name;
        const value = evt.target.value;
        setForm((old)=>{
            return {...old, [fieldname]: value}
        })
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <form action="" >
                <label htmlFor="username">Enter Username: </label>
                <input type="text" id="username" name="username" value={form.username} onChange={update}/>
            </form>
        </div>
    )
}