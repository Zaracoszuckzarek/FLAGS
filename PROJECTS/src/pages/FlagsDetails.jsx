import { useLoaderData } from "react-router-dom";
import { getFlagData } from "../api";


export async function loader({ params}) {
  return getFlagData(params.id);
}


const FlagsDetails = () => {

const flag = useLoaderData();
  console.log(flag)


  return (

    <div>
      <img src={flag.img} alt="Details page" />
      <div>
        <h2>{flag.name}</h2>
        <p>{flag.price}</p>
        <p>{flag.description}</p>
        <p>{flag.country}</p>
      </div>
    </div>
  );
};

export default FlagsDetails;