import React, { useState,useEffect } from 'react'
import Heading from '../component/Heading'
import Footer from '../component/Footer'
import ShowReview from '../component/ShowReview'
import AddReview from '../component/AddReview'

export default function Review() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
        const key = "input";
        localStorage.setItem(key, JSON.stringify(reviews));
      }, [reviews]);
  return (
    <>
    <Heading/>
    <main className="flex min-h-[85vh]">
        <ShowReview reviews = {reviews}/>
        <AddReview setReviews = {setReviews}/>
    </main>
    <Footer/>
    </>
  )
}


