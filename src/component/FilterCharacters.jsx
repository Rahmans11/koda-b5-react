import React from 'react'

export default function FilterCharacters(props) {
    const {inputFilter} = props;
    const submitHandler = (event) =>{
        event.preventDefault();

        const newQuery = {};
        if(event.target["query-name"].value == ""){
             Object.assign(newQuery,{queryName: ""});
        }else{
            Object.assign(newQuery,{queryName: "name="+event.target["query-name"].value});
        }
        if(event.target["query-species"].value == 0){
            Object.assign(newQuery,{querySpecies: ""});
        }else{
            Object.assign(newQuery,{querySpecies: "&species="+event.target["query-species"].value});
        }
        
        event.target["query-name"].value = "";
        event.target["query-species"].value = "0";

        let stringQuery;
        stringQuery = newQuery.queryName + newQuery.querySpecies;
        inputFilter(stringQuery);

        
    };
    return (
            <form className='border-2 border-solid border-blue-400 h-[8vh] flex justify-center gap-3'
            noValidate onSubmit={submitHandler}>
                <label className='pt-[10px]'
                htmlFor="">Search by Name? </label>
                <input className='border-4 border-solid border-black bg-white rounded-[10px] 
                text-center text-blue-600 font-semibold'
                type="text" name='query-name' id='query-name' placeholder='input name'/>
                <label className='pt-[10px]'
                htmlFor="query-species">Select Species: </label>
                <select className='text-blue-600 font-semibold'
                    id="query-species" name="query_species">
                    <option className='text-blue-600 font-semibold'
                    value="0" disabled defaultValue={"0"}>Choose Species to Filter</option>
                    <option className='text-blue-600 font-semibold'
                    value="human">Human</option>
                    <option className='text-blue-600 font-semibold'
                    value="alien">Alien</option>
                </select>
                <button className='w-[15%] border-4 ' type="submit">Submit</button>
            </form>
    )
}
