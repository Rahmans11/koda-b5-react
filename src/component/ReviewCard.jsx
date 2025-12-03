import React from 'react'

export default function ReviewCard({name, message}) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{message}</p>
    </article>
  )
}
