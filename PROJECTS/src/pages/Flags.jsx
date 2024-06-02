import { getFlagsData } from "../api";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export async function loader() {
  return getFlagsData();
}


const Flags = () => {
  const[searchParams, setSearchParams] = useSearchParams()
  const flags = useLoaderData()
  const countryFlagFilter = searchParams.get("country") 

const displayFlags = countryFlagFilter? flags.filter(flag => flag.country === countryFlagFilter):flags 
  const flagsList = displayFlags.map(flag => {
  return(
      <div key={flag.id} className="flagCard">
      <Link to={flag.id}>
      <img src={flag.img} alt="nice flags"/>
      <div>
      <h3>{flag.name}</h3>
      </div>
      </Link>
      </div>
    )
  })

  function handleFlagchangeFilter( key,value ){
    setSearchParams(prevParams => {
      if(!value){
        prevParams.delete(key)
      }else{
        prevParams.set(key, value)
      }
      return prevParams
    })
}

  return (
    <div className="flags-Display-Wrapper-container">
    <div className="display-filter-buttons-container">
    <button onClick={()=> handleFlagchangeFilter("country", "USA")}>USA</button>
    <button onClick={()=> handleFlagchangeFilter("country", "tunisia")}>Tunisia</button>
    <button onClick={()=> handleFlagchangeFilter("country", "Ecuador")}>Ecuador</button>
    <button onClick={()=> handleFlagchangeFilter("country", "pueto-rico")}>Pueto-Rico</button>
    <button onClick={()=> handleFlagchangeFilter("country", "Argentina")}>Argentina</button>
    <button onClick={()=> handleFlagchangeFilter("country", "rwanda")}>Rwanda</button>
    <button onClick={()=> handleFlagchangeFilter("country", "Chad")}>Chad</button>
    <button onClick={()=> handleFlagchangeFilter("country", "mauritania")}>Mauritania</button>
    </div>
    <div className="flags-disply">
    {flagsList}
    </div>
    </div>
  )
}

export default Flags
