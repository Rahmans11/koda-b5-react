import React from 'react'
import AddReview from "./AddReview"
import ReviewCard from "./ReviewCard"

export default function ShowReview(props) {
  const {reviews} = props;
  return (
      <article className="grid grid-cols-8 grid-rows-4 w-[70%] p-[20px_20px] border-2 border-solid border-white">
        {
          reviews.map((review, idx)=>{
            return <ReviewCard key={idx} name={review.name} message={review.message}/>;
          })
        }
      </article>
  )
}
