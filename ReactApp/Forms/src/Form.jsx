import { useState } from "react";

export default function Form(){

    const [formData, setFormData] =useState({
        firstname:"",
        lastname:"",
        password:""
    });
    const handleFormData = (evt) =>{
        const fieldName = evt.target.name;
        const value = evt.target.value;
        setFormData((oldData)=>{
            return{...oldData , [fieldName]:value}
        })
    }
    const handleSubmit = ()=>{
        console.log(formData)
    }
    return(
    <>
        <form action="">
            <label htmlFor="first">First Name: </label>
            <input type="text" placeholder="first name" id="first" name="firstname" value={formData.firstname} onChange={handleFormData}/>
        </form>
        <form action="">
            <label htmlFor="last">last Name: </label>
            <input type="text" placeholder="last name" id="last" name="lastname" value={formData.lastname} onChange={handleFormData}/>
        </form>
        <form action="">
            <label htmlFor="password">password: </label>
            <input type="password" placeholder="password name" id="password" name="password" value={formData.password} onChange={handleFormData}/>
        </form>
        <button onClick={handleSubmit}>submit</button>
    </>)
}