import React from 'react'
import {Route,Switch} from 'react-router-dom';
import {useState} from 'react';


const Register = () => {
        const[email,setEmail]=useState('');
        const[userName,setUserName]=useState('');
        const[password,setPassword]=useState('');
        const[allEntry,setAllEntry]=useState([]);
    
        const submitForm =(e)=>{
            e.preventDefault();
            const newEntry={email:email, username:userName, password:password};
            setAllEntry([...allEntry,newEntry]);
            console.log(allEntry);
        }
      return (
        <>
           <div>
            <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor='email'>email</label>
                <input type='text' name='email' id='email' autoComplete='off' value={email} 
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='username'>USERNAME</label>
                <input type='text' name='username' id='userName' autoComplete='off' value={userName} 
                onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            
            <div>
                <label htmlFor='password'>PASSWORD</label>
                <input type='password' name='password' id='password' value={password} 
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
            </form>

            <div>{allEntry.map((curElem)=>{
                return(
                <div className='showDataStyle'>
                    <p>{curElem.email}</p>
                    <p>{curElem.userName}</p>
                    <p>{curElem.password}</p>
                    </div>);
            })}</div>
    
            </div>
        </>
      );
    }
    
    export default Register
    
