import React from 'react'

export default function FilterCharacters(characterList) {
    //const {characterList} = props
    // let species;
    // characterList.map((character)=>{
    //     species =character.species;
    //     return species;
    // })

    return (
            <div>
                <label htmlFor="select-species">Select Species: </label>
                <select //onChange={speciesDropDown}
                    id="select-species" name="select_species">
                    <option value="0" disabled defaultValue={"0"}>Choose Species to Filter</option>
                    <option value="human">Human</option>
                    <option value="alien">Alien</option>
                </select>
            </div>
    )
}
