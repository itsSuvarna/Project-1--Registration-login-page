import React from 'react'
import {Route,Switch} from 'react-router-dom';
import {useState} from 'react';
import Register from './Register';

const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[allEntry,setAllEntry]=useState([]);

    const submitForm =(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password};
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
    }
  return (
    <>
       <div>
        <form action="" onSubmit={submitForm}>
        <div>
            <label htmlFor='username'>email</label>
            <input type='text' name='email' id='email' autoComplete='off' value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        
        <div>
            <label htmlFor='password'>PASSWORD</label>
            <input type='password' name='password' id='password' value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <button type='submit'>Login</button>
        </div>
        </form>
        <div>{allEntry.map((curElem)=>{
            return(
            <div className='showDataStyle'>
                <p>{curElem.email}</p>
                <p>{curElem.password}</p>
                </div>);
        })}</div>

        <div><span>Dont have an account ?</span>
        <Switch><Route exact path='/Register' component={Register}/></Switch>
        <span><a href='/Register'>Register</a></span></div>
    </div>
    </>
  )
}

export default Login
