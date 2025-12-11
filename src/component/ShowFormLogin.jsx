import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function ShowFormLogin(props) {
const navigate = useNavigate();
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

    const key = "input";
    localStorage.setItem(key, JSON.stringify(newLogin));
    navigate("/", { replace: true });
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
    <form className="p-10 border-2 border-solid border-white h-fit w-[40%] p-10"
    noValidate onSubmit={submitHandler}>
        <div>
            <h2 className="text-center font-bold text-xl m-5 text-4xl border-b-2 border-solid border-b-blue-700">
            WellCome Back👋
        </h2>
        <p className='inline justify-around'>Sign in with your data that your entered during registration</p>
        </div>
        <br />
        <div className="m-5">
            <label className="text-2xl"
            htmlFor="email">Email</label>
            <br />
            <input className="border-2 border-solid border-white p-1 w-full"
            type="email" name='email' id="email" placeholder="Enter your email"
            value={form.email}
            onChange={onChangeHandler}
            />
        </div>
        <div className="m-5">
            <label className="text-2xl"
            htmlFor="password">Password</label>
            <br />
            <input className="border-2 border-solid border-white p-1 w-full"
            type="password" name='password' id="password" placeholder="Enter your email"
            value={form.password}
            onChange={onChangeHandler}
            />
        </div>
        <p>Forgot Your Password?</p>
        <br />
        <button className='w-[60%] h-12'
        type="submit">Login</button>
    </form>
  )
}
