import { getFlagsData } from "../api";
import { authentication } from "../utils";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export async function loader() {
  await authentication()
  return getFlagsData();
}

const Flags = () => {
  const flags = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const countryFlagFilter = searchParams.get("country");

  const displayFlags = countryFlagFilter
    ? flags.filter(flag => flag.country === countryFlagFilter)
    : flags;

    
  const flagsList = displayFlags.map(flag => (
      <div key={flag.id} className="flagCard">
        <Link
          to={flag.id}
          state={{ search: `?${searchParams.toString()}`, 
          type: countryFlagFilter }}
        >
          <img src={flag.img} alt="nice flags" />
          <div className="flag-card-info">
            <h3>{flag.name}</h3>
          </div>
        </Link>
      </div>
    ));

  function handleFlagchangeFilter(key, value) {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="flags-Display-Wrapper-container">
      <div className="flags-head-h1">
        <h3>Search by country:</h3>
      </div>
      <div className="display-filter-buttons-container">
        {countryFlagFilter ? (
          <button onClick={() => handleFlagchangeFilter("country", null)}>
            &larr; Clear filter
          </button>
        ) : null}

        <button onClick={() => handleFlagchangeFilter("country", "Australia")}>
          Australia
        </button>

        <button onClick={() => handleFlagchangeFilter("country", "Argentina")}>
          Argentina
        </button>

        <button onClick={() => handleFlagchangeFilter("country", "Belgium")}>
          Belgian
        </button>
        <button onClick={() => handleFlagchangeFilter("country", "Brazil")}>
          Brazil
        </button>

        <button onClick={() => handleFlagchangeFilter("country", "Ecuador")}>
          Ecuador
        </button>

        <button onClick={() => handleFlagchangeFilter("country", "Guatemala")}>
          Guatemala
        </button>

        <button onClick={() => handleFlagchangeFilter("country", "Kazakhstan")}>
          Kazakhstan
        </button>

        <button onClick={() => handleFlagchangeFilter("country", "Mauritania")}>
          Mauritania
        </button>

        <button
          onClick={() => handleFlagchangeFilter("country", "Puerto-Rico")}
        >
          Pueto-Rico
        </button>

        <button onClick={() => handleFlagchangeFilter("country", "Rwanda")}>
          Rwanda
        </button>

        <button
          onClick={() => handleFlagchangeFilter("country", "South-Korea")}
        >
          South-Korea
        </button>

        <button
          onClick={() => handleFlagchangeFilter("country", "Switzerland")}
        >
          Switzerland
        </button>

        <button onClick={() => handleFlagchangeFilter("country", "Tunisia")}>
          Tunisia
        </button>
      </div>

      <div className="flags-disply-list-container">
        <h1>Flags factory</h1>
        <div className="flags-List">{flagsList}</div>
      </div>
    </div>
  );
};

export default Flags;