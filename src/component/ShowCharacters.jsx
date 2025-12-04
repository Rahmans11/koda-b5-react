import React from 'react'

export default function ShowCharacters(props) {
    const {characterList} = props
  return (
    <section className="grid grid-cols-4">
        {characterList.map((item, idx)=>{
            return (
                <div className="border-2 border-solid border-blue-400 font-"
                key={idx}>
                        <img src={item.image} alt="image-character" />
                        <p >Character Name: {item.name}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Species: {item.species}</p>
                        <p>Type: {item.type}</p>
                        <p>Status: {item.status}</p>
                    </div>
            )
        })}
    </section>
  )
}
