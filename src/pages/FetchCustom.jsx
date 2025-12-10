import Heading from "../component/Heading";
import Footer from "../component/Footer";
import CustomFetchCard from "../component/CustomFetchCard";
import useFetch from "../customHooks/useFetch";

function FetchCustom() {
    
    const url = "https://jsonplaceholder.typicode.com/users";
    const {setUrl, data, isLoading} = useFetch(url);
    useFetch(url);
    const pokeFetch = () =>{
       setUrl("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    }

    const userFetch = () =>{
       setUrl("https://jsonplaceholder.typicode.com/users")
    }

    return(
        <>
            <Heading/>
            <main className="h-screen px-10">
                <h2 className="text-center text-3xl font-extrabold text-blue-600 m-[20px_20px]">
                    Fetch Custom Hooks
                </h2>
                <div className="flex justify-center gap-8">
                    <button onClick={pokeFetch} 
                    className="bg-blue-400 text-white font-bold py-2 px-4 rounded"
                    type="button">Pokemon Fetch
                    </button>

                    <button onClick={userFetch} 
                    className="bg-blue-400 text-white font-bold py-2 px-4 rounded "
                    type="button">User Fetch
                    </button>
                </div>

                <div className="flex justify-center">
                    <p className="text-7xl font-bold text-blue-400">
                        {isLoading ? "Loading...." : ""}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-5 py-8">
                    {data.map((item, idx)=>{
                        return <CustomFetchCard key={idx} name ={item.name}/>
                    })}
                </div>
                
            </main>
            <Footer/>
        </>
    )
}

export default FetchCustom;