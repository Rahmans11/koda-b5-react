import React from 'react'
import AddReview from "./AddReview"
import ReviewCard from "./ReviewCard"

export default function ShowReview(props) {
  const {reviews} = props;
  return (
      <article className="flex-1 p-5 border-2 border-solid border-white">
        {
          reviews.map((review, idx)=>{
            return <ReviewCard key={idx} name={review.name} message={review.message}/>;
          })
        }
      </article>
  )
}
