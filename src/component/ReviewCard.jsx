import React from 'react'

export default function ReviewCard({name, message}) {
  return (
    <div className='border-2 border-solid border-white min-h-fit min-w-fit'>
      <h3 className='underline'>{name}</h3>
      <p>{message}</p>
    </div>
  )
}
