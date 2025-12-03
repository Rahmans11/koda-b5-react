import React, { useState } from 'react'



export default function ShowFormLogin(props) {
const {setLogin} = props;
const [form, setForm] = useState({
    email:"",
    password:"",
});
const submitHandler = (event) =>{
    event.preventDefault();
    const newLogin = {};

    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(form.email) || form.password.length < 5){
        console.log("invalid email or password")
    }
    else{
        Object.assign(newLogin, {email: form.email, password: form.password})
        setLogin((login)=>{
        return [...login,newLogin]
    })
    }
    
    console.log(newLogin)
    setForm({
      email: "",
      password: "",
    });
}

const onChangeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.id]: e.target.value };
    });
  };

  return (
    <form noValidate onSubmit={submitHandler}>
        <div>
            <h2 className="text-center font-bold text-xl">
            WellCome Back👋
        </h2>
        <p>Sign in with your data that your entered during registration</p>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <br />
            <input className="border-2 border-solid border-black p-1 w-full"
            type="email" name='email' id="email" placeholder="Enter your email"
            value={form.email}
            onChange={onChangeHandler}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <br />
            <input className="border-2 border-solid border-black p-1 w-full"
            type="password" name='password' id="password" placeholder="Enter your email"
            value={form.password}
            onChange={onChangeHandler}
            />
        </div>
        <p>Forgot Your Password?</p>
        <button type="submit">Login</button>
    </form>
  )
}
