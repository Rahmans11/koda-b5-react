import React from 'react'

export default function AddReview(props) {
  const {setReviews} = props
  const submitHandler = (event) =>{
    event.preventDefault();
    const newReview = {};
    Object.assign(newReview,{name: event.target["name"].value, message: event.target["message"].value
    });
    setReviews((review)=>{
      return [...review,newReview]
    })
    event.target["name"].value = ""; 
    event.target["message"].value = "";
  }
  return (
    <aside>
      <form className="p-10 border-2 border-solid border-white h-full w-full"
            noValidate onSubmit={submitHandler}>
        <h2 className="m-5 text-4xl border-b-2 border-solid border-b-blue-700">
                    Add Review
                </h2>
                <div className="m-5"> 
                    <label className="text-2xl"
                    htmlFor="name">Name:</label>
                    <br />
                    <input className="border-2 border-solid border-blue-400 bg-blue-400 rounded-[5px] text-black"
                    type="text" name="name" id="name" placeholder=" input Name "/>
                </div>
                <div className="m-5"> 
                    <label className="text-2xl"
                    htmlFor="message">Message:</label>
                    <br />  
                    <textarea className="border-2 border-solid border-blue-400 bg-blue-400 rounded-[5px] text-black"
                    name="message" id="message" rows="5" cols="40" placeholder="input message..."></textarea>
                </div>
                <br />
                <div className="flex justify-center">
                    <button type="submit">Submit</button>
                </div>
      </form>
    </aside>
  )
}
