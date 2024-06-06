import { Link, useLoaderData } from "react-router-dom";
import { getFlagData } from "../api";

export async function loader({ params }) {
  return getFlagData(params.id);
}

const FlagsDetails = () => {
  const flag = useLoaderData();
  console.log(flag);

  return (
    <div className="flags-details-wrapper-container">
      <div className="flags-details-link">
        <Link to=".." relative="path">
          &larr;<span> Back to all flags </span>
        </Link>
      </div>
      <div className="flags-details-card">
        <img src={flag.img} alt="Details page" />
        <div className="flags-details-info">
          <h4>Name: {flag.name}</h4>
          <p>Price: ${flag.price}.00</p>
          <p>Des: {flag.description}</p>
          <p>Country: {flag.country}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FlagsDetails;
